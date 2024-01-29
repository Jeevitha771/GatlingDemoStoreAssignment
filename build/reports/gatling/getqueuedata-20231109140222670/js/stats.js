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
        "total": "3580",
        "ok": "-",
        "ko": "3580"
    },
    "maxResponseTime": {
        "total": "4105",
        "ok": "-",
        "ko": "4105"
    },
    "meanResponseTime": {
        "total": "3821",
        "ok": "-",
        "ko": "3821"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "-",
        "ko": "182"
    },
    "percentiles1": {
        "total": "3795",
        "ok": "-",
        "ko": "3795"
    },
    "percentiles2": {
        "total": "4003",
        "ok": "-",
        "ko": "4003"
    },
    "percentiles3": {
        "total": "4091",
        "ok": "-",
        "ko": "4091"
    },
    "percentiles4": {
        "total": "4102",
        "ok": "-",
        "ko": "4102"
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
        "total": "0.226",
        "ok": "-",
        "ko": "0.226"
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
        "total": "3589",
        "ok": "-",
        "ko": "3589"
    },
    "maxResponseTime": {
        "total": "4105",
        "ok": "-",
        "ko": "4105"
    },
    "meanResponseTime": {
        "total": "3834",
        "ok": "-",
        "ko": "3834"
    },
    "standardDeviation": {
        "total": "194",
        "ok": "-",
        "ko": "194"
    },
    "percentiles1": {
        "total": "3805",
        "ok": "-",
        "ko": "3805"
    },
    "percentiles2": {
        "total": "4013",
        "ok": "-",
        "ko": "4013"
    },
    "percentiles3": {
        "total": "4079",
        "ok": "-",
        "ko": "4079"
    },
    "percentiles4": {
        "total": "4100",
        "ok": "-",
        "ko": "4100"
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
        "total": "0.113",
        "ok": "-",
        "ko": "0.113"
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
        "total": "3580",
        "ok": "-",
        "ko": "3580"
    },
    "maxResponseTime": {
        "total": "4084",
        "ok": "-",
        "ko": "4084"
    },
    "meanResponseTime": {
        "total": "3809",
        "ok": "-",
        "ko": "3809"
    },
    "standardDeviation": {
        "total": "168",
        "ok": "-",
        "ko": "168"
    },
    "percentiles1": {
        "total": "3785",
        "ok": "-",
        "ko": "3785"
    },
    "percentiles2": {
        "total": "3927",
        "ok": "-",
        "ko": "3927"
    },
    "percentiles3": {
        "total": "4056",
        "ok": "-",
        "ko": "4056"
    },
    "percentiles4": {
        "total": "4078",
        "ok": "-",
        "ko": "4078"
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
        "total": "0.113",
        "ok": "-",
        "ko": "0.113"
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
