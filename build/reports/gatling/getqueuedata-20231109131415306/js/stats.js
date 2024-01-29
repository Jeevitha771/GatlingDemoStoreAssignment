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
        "total": "319",
        "ok": "-",
        "ko": "319"
    },
    "maxResponseTime": {
        "total": "766",
        "ok": "-",
        "ko": "766"
    },
    "meanResponseTime": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "-",
        "ko": "102"
    },
    "percentiles1": {
        "total": "407",
        "ok": "-",
        "ko": "407"
    },
    "percentiles2": {
        "total": "423",
        "ok": "-",
        "ko": "423"
    },
    "percentiles3": {
        "total": "544",
        "ok": "-",
        "ko": "544"
    },
    "percentiles4": {
        "total": "722",
        "ok": "-",
        "ko": "722"
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
        "total": "327",
        "ok": "-",
        "ko": "327"
    },
    "maxResponseTime": {
        "total": "766",
        "ok": "-",
        "ko": "766"
    },
    "meanResponseTime": {
        "total": "447",
        "ok": "-",
        "ko": "447"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "-",
        "ko": "136"
    },
    "percentiles1": {
        "total": "423",
        "ok": "-",
        "ko": "423"
    },
    "percentiles2": {
        "total": "424",
        "ok": "-",
        "ko": "424"
    },
    "percentiles3": {
        "total": "663",
        "ok": "-",
        "ko": "663"
    },
    "percentiles4": {
        "total": "745",
        "ok": "-",
        "ko": "745"
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
        "total": "319",
        "ok": "-",
        "ko": "319"
    },
    "maxResponseTime": {
        "total": "407",
        "ok": "-",
        "ko": "407"
    },
    "meanResponseTime": {
        "total": "393",
        "ok": "-",
        "ko": "393"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "-",
        "ko": "30"
    },
    "percentiles1": {
        "total": "405",
        "ok": "-",
        "ko": "405"
    },
    "percentiles2": {
        "total": "407",
        "ok": "-",
        "ko": "407"
    },
    "percentiles3": {
        "total": "407",
        "ok": "-",
        "ko": "407"
    },
    "percentiles4": {
        "total": "407",
        "ok": "-",
        "ko": "407"
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
