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
        "total": "303",
        "ok": "-",
        "ko": "303"
    },
    "maxResponseTime": {
        "total": "1118",
        "ok": "-",
        "ko": "1118"
    },
    "meanResponseTime": {
        "total": "516",
        "ok": "-",
        "ko": "516"
    },
    "standardDeviation": {
        "total": "263",
        "ok": "-",
        "ko": "263"
    },
    "percentiles1": {
        "total": "400",
        "ok": "-",
        "ko": "400"
    },
    "percentiles2": {
        "total": "439",
        "ok": "-",
        "ko": "439"
    },
    "percentiles3": {
        "total": "1097",
        "ok": "-",
        "ko": "1097"
    },
    "percentiles4": {
        "total": "1114",
        "ok": "-",
        "ko": "1114"
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
        "total": "0.875",
        "ok": "-",
        "ko": "0.875"
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
        "total": "333",
        "ok": "-",
        "ko": "333"
    },
    "maxResponseTime": {
        "total": "1118",
        "ok": "-",
        "ko": "1118"
    },
    "meanResponseTime": {
        "total": "645",
        "ok": "-",
        "ko": "645"
    },
    "standardDeviation": {
        "total": "322",
        "ok": "-",
        "ko": "322"
    },
    "percentiles1": {
        "total": "417",
        "ok": "-",
        "ko": "417"
    },
    "percentiles2": {
        "total": "939",
        "ok": "-",
        "ko": "939"
    },
    "percentiles3": {
        "total": "1108",
        "ok": "-",
        "ko": "1108"
    },
    "percentiles4": {
        "total": "1116",
        "ok": "-",
        "ko": "1116"
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
        "total": "0.438",
        "ok": "-",
        "ko": "0.438"
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
        "total": "303",
        "ok": "-",
        "ko": "303"
    },
    "maxResponseTime": {
        "total": "440",
        "ok": "-",
        "ko": "440"
    },
    "meanResponseTime": {
        "total": "387",
        "ok": "-",
        "ko": "387"
    },
    "standardDeviation": {
        "total": "44",
        "ok": "-",
        "ko": "44"
    },
    "percentiles1": {
        "total": "394",
        "ok": "-",
        "ko": "394"
    },
    "percentiles2": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "percentiles3": {
        "total": "438",
        "ok": "-",
        "ko": "438"
    },
    "percentiles4": {
        "total": "440",
        "ok": "-",
        "ko": "440"
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
        "total": "0.438",
        "ok": "-",
        "ko": "0.438"
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
