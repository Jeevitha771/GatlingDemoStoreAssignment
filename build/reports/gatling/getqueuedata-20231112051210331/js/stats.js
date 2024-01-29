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
        "total": "277",
        "ok": "-",
        "ko": "277"
    },
    "maxResponseTime": {
        "total": "798",
        "ok": "-",
        "ko": "798"
    },
    "meanResponseTime": {
        "total": "345",
        "ok": "-",
        "ko": "345"
    },
    "standardDeviation": {
        "total": "147",
        "ok": "-",
        "ko": "147"
    },
    "percentiles1": {
        "total": "283",
        "ok": "-",
        "ko": "283"
    },
    "percentiles2": {
        "total": "300",
        "ok": "-",
        "ko": "300"
    },
    "percentiles3": {
        "total": "656",
        "ok": "-",
        "ko": "656"
    },
    "percentiles4": {
        "total": "770",
        "ok": "-",
        "ko": "770"
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
        "total": "1.077",
        "ok": "-",
        "ko": "1.077"
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
        "total": "277",
        "ok": "-",
        "ko": "277"
    },
    "maxResponseTime": {
        "total": "579",
        "ok": "-",
        "ko": "579"
    },
    "meanResponseTime": {
        "total": "329",
        "ok": "-",
        "ko": "329"
    },
    "standardDeviation": {
        "total": "103",
        "ok": "-",
        "ko": "103"
    },
    "percentiles1": {
        "total": "284",
        "ok": "-",
        "ko": "284"
    },
    "percentiles2": {
        "total": "300",
        "ok": "-",
        "ko": "300"
    },
    "percentiles3": {
        "total": "495",
        "ok": "-",
        "ko": "495"
    },
    "percentiles4": {
        "total": "562",
        "ok": "-",
        "ko": "562"
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
        "total": "0.538",
        "ok": "-",
        "ko": "0.538"
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
        "total": "277",
        "ok": "-",
        "ko": "277"
    },
    "maxResponseTime": {
        "total": "798",
        "ok": "-",
        "ko": "798"
    },
    "meanResponseTime": {
        "total": "361",
        "ok": "-",
        "ko": "361"
    },
    "standardDeviation": {
        "total": "179",
        "ok": "-",
        "ko": "179"
    },
    "percentiles1": {
        "total": "280",
        "ok": "-",
        "ko": "280"
    },
    "percentiles2": {
        "total": "309",
        "ok": "-",
        "ko": "309"
    },
    "percentiles3": {
        "total": "654",
        "ok": "-",
        "ko": "654"
    },
    "percentiles4": {
        "total": "769",
        "ok": "-",
        "ko": "769"
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
        "total": "0.538",
        "ok": "-",
        "ko": "0.538"
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
