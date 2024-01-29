var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "14",
        "ok": "14",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "730",
        "ok": "730",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles1": {
        "total": "315",
        "ok": "315",
        "ko": "-"
    },
    "percentiles2": {
        "total": "391",
        "ok": "391",
        "ko": "-"
    },
    "percentiles3": {
        "total": "633",
        "ok": "633",
        "ko": "-"
    },
    "percentiles4": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 14,
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
        "total": "1",
        "ok": "1",
        "ko": "-"
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
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "730",
        "ok": "730",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles1": {
        "total": "344",
        "ok": "344",
        "ko": "-"
    },
    "percentiles2": {
        "total": "465",
        "ok": "465",
        "ko": "-"
    },
    "percentiles3": {
        "total": "685",
        "ok": "685",
        "ko": "-"
    },
    "percentiles4": {
        "total": "721",
        "ok": "721",
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
        "total": "0.5",
        "ok": "0.5",
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
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "418",
        "ok": "418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "325",
        "ok": "325",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "percentiles1": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "percentiles2": {
        "total": "358",
        "ok": "358",
        "ko": "-"
    },
    "percentiles3": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "percentiles4": {
        "total": "417",
        "ok": "417",
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
        "total": "0.5",
        "ok": "0.5",
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
