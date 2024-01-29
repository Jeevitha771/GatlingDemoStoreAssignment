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
        "total": "381",
        "ok": "381",
        "ko": "556"
    },
    "maxResponseTime": {
        "total": "982",
        "ok": "630",
        "ko": "982"
    },
    "meanResponseTime": {
        "total": "576",
        "ok": "438",
        "ko": "714"
    },
    "standardDeviation": {
        "total": "177",
        "ok": "83",
        "ko": "131"
    },
    "percentiles1": {
        "total": "590",
        "ok": "398",
        "ko": "660"
    },
    "percentiles2": {
        "total": "656",
        "ok": "436",
        "ko": "767"
    },
    "percentiles3": {
        "total": "862",
        "ok": "582",
        "ko": "926"
    },
    "percentiles4": {
        "total": "958",
        "ok": "620",
        "ko": "971"
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
        "total": "0.824",
        "ok": "0.412",
        "ko": "0.412"
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
        "total": "556",
        "ok": "-",
        "ko": "556"
    },
    "maxResponseTime": {
        "total": "982",
        "ok": "-",
        "ko": "982"
    },
    "meanResponseTime": {
        "total": "714",
        "ok": "-",
        "ko": "714"
    },
    "standardDeviation": {
        "total": "131",
        "ok": "-",
        "ko": "131"
    },
    "percentiles1": {
        "total": "660",
        "ok": "-",
        "ko": "660"
    },
    "percentiles2": {
        "total": "767",
        "ok": "-",
        "ko": "767"
    },
    "percentiles3": {
        "total": "926",
        "ok": "-",
        "ko": "926"
    },
    "percentiles4": {
        "total": "971",
        "ok": "-",
        "ko": "971"
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
        "total": "0.412",
        "ok": "-",
        "ko": "0.412"
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
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "630",
        "ok": "630",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "438",
        "ok": "438",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "percentiles1": {
        "total": "398",
        "ok": "398",
        "ko": "-"
    },
    "percentiles2": {
        "total": "436",
        "ok": "436",
        "ko": "-"
    },
    "percentiles3": {
        "total": "582",
        "ok": "582",
        "ko": "-"
    },
    "percentiles4": {
        "total": "620",
        "ok": "620",
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
        "total": "0.412",
        "ok": "0.412",
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
