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
        "total": "279",
        "ok": "279",
        "ko": "544"
    },
    "maxResponseTime": {
        "total": "870",
        "ok": "581",
        "ko": "870"
    },
    "meanResponseTime": {
        "total": "514",
        "ok": "369",
        "ko": "659"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "132",
        "ko": "136"
    },
    "percentiles1": {
        "total": "549",
        "ok": "284",
        "ko": "552"
    },
    "percentiles2": {
        "total": "579",
        "ok": "439",
        "ko": "776"
    },
    "percentiles3": {
        "total": "852",
        "ok": "578",
        "ko": "862"
    },
    "percentiles4": {
        "total": "866",
        "ok": "580",
        "ko": "868"
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
        "total": "0.875",
        "ok": "0.438",
        "ko": "0.438"
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
        "total": "544",
        "ok": "-",
        "ko": "544"
    },
    "maxResponseTime": {
        "total": "870",
        "ok": "-",
        "ko": "870"
    },
    "meanResponseTime": {
        "total": "659",
        "ok": "-",
        "ko": "659"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "-",
        "ko": "136"
    },
    "percentiles1": {
        "total": "552",
        "ok": "-",
        "ko": "552"
    },
    "percentiles2": {
        "total": "776",
        "ok": "-",
        "ko": "776"
    },
    "percentiles3": {
        "total": "862",
        "ok": "-",
        "ko": "862"
    },
    "percentiles4": {
        "total": "868",
        "ok": "-",
        "ko": "868"
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
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "279",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "369",
        "ok": "369",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "percentiles1": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "percentiles2": {
        "total": "439",
        "ok": "439",
        "ko": "-"
    },
    "percentiles3": {
        "total": "578",
        "ok": "578",
        "ko": "-"
    },
    "percentiles4": {
        "total": "580",
        "ok": "580",
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
        "total": "0.438",
        "ok": "0.438",
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
