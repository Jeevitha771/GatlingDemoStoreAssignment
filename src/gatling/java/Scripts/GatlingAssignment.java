package Scripts;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.http.HttpDsl.status;

import java.util.*;

import io.gatling.javaapi.core.*;

import java.util.List;

public class GatlingAssignment extends Simulation{
    //https://demostore.gatling.io/swagger-ui/index.html#/products/getProduct
    String baseUrl = "https://demostore.gatling.io";
    private static FeederBuilder.FileBased<Object> jsonFeeder = jsonFile("TestData/demoStoreNewData.json").circular();
    private static FeederBuilder.FileBased<Object> jsonFeederProds = jsonFile("TestData/demoStoreProducts.json").random();

    private HttpProtocolBuilder httpConf = http
            .baseUrl(baseUrl)
            .acceptHeader("application/json")
            .contentTypeHeader("application/json");

    //Authentication with required headers and storing the token for further post and put api's
    private static ChainBuilder authenticate =
            exec(http("Authenticate")
                    .post("/api/authenticate")
                    .body(StringBody("{\n" +
                            "  \"username\": \"admin\",\n" +
                            "  \"password\": \"admin\"\n" +
                            "}"))
                    .check(status().is(200))
                    .check(jmesPath("token").saveAs("jwtToken"))
            )
            ;

    private static ChainBuilder createNewProduct =
            feed(jsonFeeder)
    .exec(http("Create new game")
                    .post("/api/product")
                    .header("Authorization", "Bearer ${jwtToken}")
                    .body(StringBody(
                            "{\n" +
                                    "            \"name\": \"${name}\",\n" +
                                    "            \"description\": \"${description}\",\n" +
                                    "            \"image\": \"${image}\",\n" +
                                    "            \"price\": \"${price}\",\n" +
                                    "            \"categoryId\": ${catId}\n" +
                                    "}"
                    )).check(status().is(200))

                    .check(bodyString().saveAs("newProductResponse")))
            ;
    private ChainBuilder updateProdById =
            feed(jsonFeeder)
                    .exec(http("Update game")
                            .put("/api/product/${prodId}")
                            .header("Authorization", "Bearer ${jwtToken}")
                            .body(StringBody(
                                    "{\n" +
                                            "            \"name\": \"${name}\",\n" +
                                            "            \"description\": \"${description}\",\n" +
                                            "            \"image\": \"${image}\",\n" +
                                            "            \"price\": \"${price}\",\n" +
                                            "            \"categoryId\": ${catId}\n" +
                                            "}"
                            )).check(status().is(200))

                            .check(bodyString().saveAs("AfterUpdateResponse")))


    .exec(session -> {
        System.out.println("Updated Product Response: " + session.getString("AfterUpdateResponse"));
        return session;
    });


    private ChainBuilder getCategories =
            exec(http("Get all categories")
            .get("/api/category")
            .check(status().is(200))
            .check(jmesPath("[]").saveAs("AllCategories")).check(jmesPath("[].id").saveAs("AllIdsOfCat"))

            );
    private ChainBuilder getProducts =
            exec(http("Get all categories")
                    .get("/api/product")
                    .check(status().is(200))
                    .check(jmesPath("[]").saveAs("AllProducts")).check(jmesPath("[].id").saveAs("AllIdsOfProd"))
            ).exec(session->{
                        System.out.println("All Products"+session.getString("AllProducts"));
                        System.out.println("All Products Id: " + session.getString("AllIdsOfProd"));
                        return session;
                    }
            );
    private ChainBuilder getRandomId(String str1) {
        return exec(session -> {
            System.out.println("All Categories: " + session.getString("AllCategories"));
            System.out.println("All Categories Id: " + session.getString("AllIdsOfCat"));

            String allCategoriesId = session.getString(str1);
            int randomId = 0;

            try {
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode jsonNode = objectMapper.readTree(allCategoriesId);

                if (jsonNode.isArray()) {
                    List<Integer> jsonList = objectMapper.convertValue(jsonNode, List.class);
                    int numberOfItems = jsonList.size();
                    Random random = new Random();
                    int randomIndex = random.nextInt(numberOfItems);
                    randomId = jsonList.get(randomIndex);
                    System.out.println("Random Id: " + randomId);
                    //System.out.println("Number of Items: " + numberOfItems);
                    session.set("NumberOfItems", numberOfItems);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return session.set("RandomId", randomId);
        });
    }
    private ChainBuilder getCategoryById =
            //Here getRandomId is called to pick the random id from set of categories,
            // (alternative: use 'jsonfeeder' as in ->"getProductsById")
            exec(getRandomId("AllIdsOfCat"))
                    .exec(session->{
                    System.out.println("Random Id of Category is :"+ session.getInt("RandomId"));
                    Integer catId = session.getInt("RandomId");
                    return session.set("catId", catId);
                    }
                )
    .exec(http("Get category by ID")
            .get("/api/category/${catId}")
            .check(status().is(200))
            .check(bodyString().saveAs("CategoryById"))
        ).exec(session->{
                        System.out.println("Selected Category"+session.getString("CategoryById"));
                        return session;
                        });
    private ChainBuilder getProductsById =
            //Here the jsonFeederProds is used that picks up random product out of demoStoreProducts.json,
            // (alternative: can call getRandomId('AllIdsOfProd')
                    feed(jsonFeederProds)
            .exec(session->{
                System.out.println("Random product from Feeder: "+ session.getInt("id"));
                Integer prodId= session.getInt("id");
                return session.set("prodId", prodId);
                    }
                )
                    .exec(http("Get product by ID")
                            .get("/api/product/${prodId}")
                            .check(status().is(200))
                            .check(bodyString().saveAs("ProductById"))
                    )
                    .exec(session->{
                        System.out.println("Selected Product"+session.getString("ProductById"));
                        return session;

                    })

            ;

    private ScenarioBuilder demoStore = scenario("Listing categories")
            .exec(getCategories)
            .pause(2)
            .exec(getCategoryById)
            .pause(2)
            .exec(getProducts)
            .pause(2)
            .exec(getProductsById)
            .pause(2)
            .exec(authenticate)
            .pause(2)
            //Checking the value stored in session variables that are randomly selected prodId and catId
            //to use in creation of new product using same randomly selected catId and
            //update product using same randomly selected prodId
            .exec(session -> {
                System.out.println("cat Id" + session.getInt("catId"));
                System.out.println("Prod Id" + session.getInt("prodId"));
                return session;
            })
            //creating 3 new products
            .repeat(3).on(
                    exec(createNewProduct).pause(1)
                            .exec(session -> {
                                String responseBody = session.getString("newProductResponse");
                                System.out.println("Response After new Product: " + responseBody);
                                return session;
                            })
            )
            .exec(exec(updateProdById));

    //Starting from here
    {
        setUp(
                demoStore.injectOpen(atOnceUsers(1))
        ).protocols(httpConf);
    }
}
