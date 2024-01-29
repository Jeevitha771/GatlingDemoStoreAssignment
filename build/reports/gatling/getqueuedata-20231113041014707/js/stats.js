var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "14",
        "ok": "0",
        "ko": "14"
    },
    "minResponseTime": {
        "total": "278",
        "ok": "-",
        "ko": "278"
    },
    "maxResponseTime": {
        "total": "730",
        "ok": "-",
        "ko": "730"
    },
    "meanResponseTime": {
        "total": "419",
        "ok": "-",
        "ko": "419"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "-",
        "ko": "119"
    },
    "percentiles1": {
        "total": "403",
        "ok": "-",
        "ko": "403"
    },
    "percentiles2": {
        "total": "409",
        "ok": "-",
        "ko": "409"
    },
    "percentiles3": {
        "total": "670",
        "ok": "-",
        "ko": "670"
    },
    "percentiles4": {
        "total": "718",
        "ok": "-",
        "ko": "718"
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
    "count": 14,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.933",
        "ok": "-",
        "ko": "0.933"
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
        "total": "312",
        "ok": "-",
        "ko": "312"
    },
    "maxResponseTime": {
        "total": "730",
        "ok": "-",
        "ko": "730"
    },
    "meanResponseTime": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "standardDeviation": {
        "total": "155",
        "ok": "-",
        "ko": "155"
    },
    "percentiles1": {
        "total": "364",
        "ok": "-",
        "ko": "364"
    },
    "percentiles2": {
        "total": "524",
        "ok": "-",
        "ko": "524"
    },
    "percentiles3": {
        "total": "702",
        "ok": "-",
        "ko": "702"
    },
    "percentiles4": {
        "total": "724",
        "ok": "-",
        "ko": "724"
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
        "ok": "0",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "278",
        "ok": "-",
        "ko": "278"
    },
    "maxResponseTime": {
        "total": "461",
        "ok": "-",
        "ko": "461"
    },
    "meanResponseTime": {
        "total": "391",
        "ok": "-",
        "ko": "391"
    },
    "standardDeviation": {
        "total": "51",
        "ok": "-",
        "ko": "51"
    },
    "percentiles1": {
        "total": "404",
        "ok": "-",
        "ko": "404"
    },
    "percentiles2": {
        "total": "406",
        "ok": "-",
        "ko": "406"
    },
    "percentiles3": {
        "total": "445",
        "ok": "-",
        "ko": "445"
    },
    "percentiles4": {
        "total": "458",
        "ok": "-",
        "ko": "458"
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
