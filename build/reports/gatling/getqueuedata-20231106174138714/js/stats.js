var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10",
        "ok": "9",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "372",
        "ok": "372",
        "ko": "563"
    },
    "maxResponseTime": {
        "total": "1392",
        "ok": "1392",
        "ko": "563"
    },
    "meanResponseTime": {
        "total": "614",
        "ok": "619",
        "ko": "563"
    },
    "standardDeviation": {
        "total": "282",
        "ok": "296",
        "ko": "0"
    },
    "percentiles1": {
        "total": "545",
        "ok": "526",
        "ko": "563"
    },
    "percentiles2": {
        "total": "655",
        "ok": "669",
        "ko": "563"
    },
    "percentiles3": {
        "total": "1088",
        "ok": "1122",
        "ko": "563"
    },
    "percentiles4": {
        "total": "1331",
        "ok": "1338",
        "ko": "563"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 80
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
    "count": 1,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.75",
        "ko": "0.083"
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "372",
        "ok": "372",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1392",
        "ok": "1392",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "675",
        "ok": "675",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "373",
        "ok": "373",
        "ko": "-"
    },
    "percentiles1": {
        "total": "526",
        "ok": "526",
        "ko": "-"
    },
    "percentiles2": {
        "total": "669",
        "ok": "669",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1247",
        "ok": "1247",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1363",
        "ok": "1363",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4,
    "percentage": 80
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
    "count": 1,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.417",
        "ok": "0.417",
        "ko": "-"
    }
}
    },"req_get-vts-data-re-f9b99": {
        type: "REQUEST",
        name: "Get VTS Data Redirect 1",
path: "Get VTS Data Redirect 1",
pathFormatted: "req_get-vts-data-re-f9b99",
stats: {
    "name": "Get VTS Data Redirect 1",
    "numberOfRequests": {
        "total": "5",
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "411",
        "ok": "411",
        "ko": "563"
    },
    "maxResponseTime": {
        "total": "716",
        "ok": "716",
        "ko": "563"
    },
    "meanResponseTime": {
        "total": "552",
        "ok": "550",
        "ko": "563"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "122",
        "ko": "0"
    },
    "percentiles1": {
        "total": "563",
        "ok": "536",
        "ko": "563"
    },
    "percentiles2": {
        "total": "614",
        "ok": "640",
        "ko": "563"
    },
    "percentiles3": {
        "total": "696",
        "ok": "701",
        "ko": "563"
    },
    "percentiles4": {
        "total": "712",
        "ok": "713",
        "ko": "563"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4,
    "percentage": 80
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
    "count": 1,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.417",
        "ok": "0.333",
        "ko": "0.083"
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
