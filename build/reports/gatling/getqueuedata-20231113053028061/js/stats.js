var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "14",
        "ok": "7",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "546"
    },
    "maxResponseTime": {
        "total": "878",
        "ok": "578",
        "ko": "878"
    },
    "meanResponseTime": {
        "total": "465",
        "ok": "324",
        "ko": "605"
    },
    "standardDeviation": {
        "total": "177",
        "ok": "104",
        "ko": "112"
    },
    "percentiles1": {
        "total": "547",
        "ok": "280",
        "ko": "561"
    },
    "percentiles2": {
        "total": "564",
        "ok": "288",
        "ko": "575"
    },
    "percentiles3": {
        "total": "688",
        "ok": "492",
        "ko": "790"
    },
    "percentiles4": {
        "total": "840",
        "ok": "561",
        "ko": "860"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
    "percentage": 50
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 7,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.933",
        "ok": "0.467",
        "ko": "0.467"
    }
},
contents: {
"req_get-vts-data-36521": {
        type: "REQUEST",
        name: "Get VTS Data",
path: "Get VTS Data",
pathFormatted: "req_get-vts-data-36521",
stats: {
    "name": "Get VTS Data",
    "numberOfRequests": {
        "total": "7",
        "ok": "0",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "546",
        "ok": "-",
        "ko": "546"
    },
    "maxResponseTime": {
        "total": "878",
        "ok": "-",
        "ko": "878"
    },
    "meanResponseTime": {
        "total": "605",
        "ok": "-",
        "ko": "605"
    },
    "standardDeviation": {
        "total": "112",
        "ok": "-",
        "ko": "112"
    },
    "percentiles1": {
        "total": "561",
        "ok": "-",
        "ko": "561"
    },
    "percentiles2": {
        "total": "575",
        "ok": "-",
        "ko": "575"
    },
    "percentiles3": {
        "total": "790",
        "ok": "-",
        "ko": "790"
    },
    "percentiles4": {
        "total": "860",
        "ok": "-",
        "ko": "860"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 7,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.467",
        "ok": "-",
        "ko": "0.467"
    }
}
    },"req_post-vts-data-eba9d": {
        type: "REQUEST",
        name: "Post VTS Data",
path: "Post VTS Data",
pathFormatted: "req_post-vts-data-eba9d",
stats: {
    "name": "Post VTS Data",
    "numberOfRequests": {
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "578",
        "ok": "578",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles1": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "percentiles2": {
        "total": "288",
        "ok": "288",
        "ko": "-"
    },
    "percentiles3": {
        "total": "492",
        "ok": "492",
        "ko": "-"
    },
    "percentiles4": {
        "total": "561",
        "ok": "561",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.467",
        "ok": "0.467",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
