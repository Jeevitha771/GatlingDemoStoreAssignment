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
        "total": "284",
        "ok": "284",
        "ko": "545"
    },
    "maxResponseTime": {
        "total": "837",
        "ok": "551",
        "ko": "837"
    },
    "meanResponseTime": {
        "total": "459",
        "ok": "324",
        "ko": "594"
    },
    "standardDeviation": {
        "total": "166",
        "ok": "93",
        "ko": "99"
    },
    "percentiles1": {
        "total": "547",
        "ok": "285",
        "ko": "554"
    },
    "percentiles2": {
        "total": "553",
        "ok": "290",
        "ko": "562"
    },
    "percentiles3": {
        "total": "662",
        "ok": "473",
        "ko": "756"
    },
    "percentiles4": {
        "total": "802",
        "ok": "535",
        "ko": "821"
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
        "total": "545",
        "ok": "-",
        "ko": "545"
    },
    "maxResponseTime": {
        "total": "837",
        "ok": "-",
        "ko": "837"
    },
    "meanResponseTime": {
        "total": "594",
        "ok": "-",
        "ko": "594"
    },
    "standardDeviation": {
        "total": "99",
        "ok": "-",
        "ko": "99"
    },
    "percentiles1": {
        "total": "554",
        "ok": "-",
        "ko": "554"
    },
    "percentiles2": {
        "total": "562",
        "ok": "-",
        "ko": "562"
    },
    "percentiles3": {
        "total": "756",
        "ok": "-",
        "ko": "756"
    },
    "percentiles4": {
        "total": "821",
        "ok": "-",
        "ko": "821"
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
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "percentiles1": {
        "total": "285",
        "ok": "285",
        "ko": "-"
    },
    "percentiles2": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles3": {
        "total": "473",
        "ok": "473",
        "ko": "-"
    },
    "percentiles4": {
        "total": "535",
        "ok": "535",
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
