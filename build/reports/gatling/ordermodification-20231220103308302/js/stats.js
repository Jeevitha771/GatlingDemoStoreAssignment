var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "64",
        "ok": "63",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "10026"
    },
    "maxResponseTime": {
        "total": "10026",
        "ok": "287",
        "ko": "10026"
    },
    "meanResponseTime": {
        "total": "209",
        "ok": "53",
        "ko": "10026"
    },
    "standardDeviation": {
        "total": "1237",
        "ok": "31",
        "ko": "0"
    },
    "percentiles1": {
        "total": "50",
        "ok": "49",
        "ko": "10026"
    },
    "percentiles2": {
        "total": "54",
        "ok": "54",
        "ko": "10026"
    },
    "percentiles3": {
        "total": "76",
        "ok": "64",
        "ko": "10026"
    },
    "percentiles4": {
        "total": "3890",
        "ok": "157",
        "ko": "10026"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 63,
    "percentage": 98
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
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.089",
        "ok": "0.087",
        "ko": "0.001"
    }
},
contents: {
"req_request-x-vts-g-c26ed": {
        type: "REQUEST",
        name: "Request_X:VTS_GetColumSize",
path: "Request_X:VTS_GetColumSize",
pathFormatted: "req_request-x-vts-g-c26ed",
stats: {
    "name": "Request_X:VTS_GetColumSize",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "10026",
        "ok": "-",
        "ko": "10026"
    },
    "maxResponseTime": {
        "total": "10026",
        "ok": "-",
        "ko": "10026"
    },
    "meanResponseTime": {
        "total": "10026",
        "ok": "-",
        "ko": "10026"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10026",
        "ok": "-",
        "ko": "10026"
    },
    "percentiles2": {
        "total": "10026",
        "ok": "-",
        "ko": "10026"
    },
    "percentiles3": {
        "total": "10026",
        "ok": "-",
        "ko": "10026"
    },
    "percentiles4": {
        "total": "10026",
        "ok": "-",
        "ko": "10026"
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.001",
        "ok": "-",
        "ko": "0.001"
    }
}
    },"req_loginapi-f156f": {
        type: "REQUEST",
        name: "LoginAPI",
path: "LoginAPI",
pathFormatted: "req_loginapi-f156f",
stats: {
    "name": "LoginAPI",
    "numberOfRequests": {
        "total": "63",
        "ok": "63",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "287",
        "ok": "287",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "percentiles1": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "percentiles2": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles3": {
        "total": "64",
        "ok": "64",
        "ko": "-"
    },
    "percentiles4": {
        "total": "157",
        "ok": "157",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 63,
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
        "total": "0.087",
        "ok": "0.087",
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
