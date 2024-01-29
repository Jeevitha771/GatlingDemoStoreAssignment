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
        "total": "280",
        "ok": "286",
        "ko": "280"
    },
    "maxResponseTime": {
        "total": "905",
        "ok": "905",
        "ko": "411"
    },
    "meanResponseTime": {
        "total": "398",
        "ok": "433",
        "ko": "364"
    },
    "standardDeviation": {
        "total": "149",
        "ok": "198",
        "ko": "55"
    },
    "percentiles1": {
        "total": "383",
        "ok": "362",
        "ko": "404"
    },
    "percentiles2": {
        "total": "409",
        "ok": "412",
        "ko": "408"
    },
    "percentiles3": {
        "total": "590",
        "ok": "759",
        "ko": "411"
    },
    "percentiles4": {
        "total": "842",
        "ok": "876",
        "ko": "411"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 43
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 7
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
        "total": "1",
        "ok": "0.5",
        "ko": "0.5"
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
        "total": "286",
        "ok": "286",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "905",
        "ok": "905",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "percentiles1": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "percentiles2": {
        "total": "412",
        "ok": "412",
        "ko": "-"
    },
    "percentiles3": {
        "total": "759",
        "ok": "759",
        "ko": "-"
    },
    "percentiles4": {
        "total": "876",
        "ok": "876",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 86
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 14
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
        "ok": "0",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "280",
        "ok": "-",
        "ko": "280"
    },
    "maxResponseTime": {
        "total": "411",
        "ok": "-",
        "ko": "411"
    },
    "meanResponseTime": {
        "total": "364",
        "ok": "-",
        "ko": "364"
    },
    "standardDeviation": {
        "total": "55",
        "ok": "-",
        "ko": "55"
    },
    "percentiles1": {
        "total": "404",
        "ok": "-",
        "ko": "404"
    },
    "percentiles2": {
        "total": "408",
        "ok": "-",
        "ko": "408"
    },
    "percentiles3": {
        "total": "411",
        "ok": "-",
        "ko": "411"
    },
    "percentiles4": {
        "total": "411",
        "ok": "-",
        "ko": "411"
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
        "total": "0.5",
        "ok": "-",
        "ko": "0.5"
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
