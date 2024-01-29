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
        "total": "318",
        "ok": "-",
        "ko": "318"
    },
    "maxResponseTime": {
        "total": "1142",
        "ok": "-",
        "ko": "1142"
    },
    "meanResponseTime": {
        "total": "475",
        "ok": "-",
        "ko": "475"
    },
    "standardDeviation": {
        "total": "257",
        "ok": "-",
        "ko": "257"
    },
    "percentiles1": {
        "total": "389",
        "ok": "-",
        "ko": "389"
    },
    "percentiles2": {
        "total": "421",
        "ok": "-",
        "ko": "421"
    },
    "percentiles3": {
        "total": "1076",
        "ok": "-",
        "ko": "1076"
    },
    "percentiles4": {
        "total": "1129",
        "ok": "-",
        "ko": "1129"
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
        "total": "318",
        "ok": "-",
        "ko": "318"
    },
    "maxResponseTime": {
        "total": "1142",
        "ok": "-",
        "ko": "1142"
    },
    "meanResponseTime": {
        "total": "567",
        "ok": "-",
        "ko": "567"
    },
    "standardDeviation": {
        "total": "334",
        "ok": "-",
        "ko": "334"
    },
    "percentiles1": {
        "total": "395",
        "ok": "-",
        "ko": "395"
    },
    "percentiles2": {
        "total": "734",
        "ok": "-",
        "ko": "734"
    },
    "percentiles3": {
        "total": "1111",
        "ok": "-",
        "ko": "1111"
    },
    "percentiles4": {
        "total": "1136",
        "ok": "-",
        "ko": "1136"
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
        "total": "321",
        "ok": "-",
        "ko": "321"
    },
    "maxResponseTime": {
        "total": "503",
        "ok": "-",
        "ko": "503"
    },
    "meanResponseTime": {
        "total": "382",
        "ok": "-",
        "ko": "382"
    },
    "standardDeviation": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles1": {
        "total": "383",
        "ok": "-",
        "ko": "383"
    },
    "percentiles2": {
        "total": "398",
        "ok": "-",
        "ko": "398"
    },
    "percentiles3": {
        "total": "471",
        "ok": "-",
        "ko": "471"
    },
    "percentiles4": {
        "total": "497",
        "ok": "-",
        "ko": "497"
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
