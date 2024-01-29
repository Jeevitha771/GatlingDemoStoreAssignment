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
        "total": "273",
        "ok": "-",
        "ko": "273"
    },
    "maxResponseTime": {
        "total": "560",
        "ok": "-",
        "ko": "560"
    },
    "meanResponseTime": {
        "total": "324",
        "ok": "-",
        "ko": "324"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "-",
        "ko": "75"
    },
    "percentiles1": {
        "total": "287",
        "ok": "-",
        "ko": "287"
    },
    "percentiles2": {
        "total": "339",
        "ok": "-",
        "ko": "339"
    },
    "percentiles3": {
        "total": "462",
        "ok": "-",
        "ko": "462"
    },
    "percentiles4": {
        "total": "540",
        "ok": "-",
        "ko": "540"
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
        "total": "1.077",
        "ok": "-",
        "ko": "1.077"
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
        "total": "276",
        "ok": "-",
        "ko": "276"
    },
    "maxResponseTime": {
        "total": "560",
        "ok": "-",
        "ko": "560"
    },
    "meanResponseTime": {
        "total": "352",
        "ok": "-",
        "ko": "352"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "-",
        "ko": "96"
    },
    "percentiles1": {
        "total": "322",
        "ok": "-",
        "ko": "322"
    },
    "percentiles2": {
        "total": "377",
        "ok": "-",
        "ko": "377"
    },
    "percentiles3": {
        "total": "515",
        "ok": "-",
        "ko": "515"
    },
    "percentiles4": {
        "total": "551",
        "ok": "-",
        "ko": "551"
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
        "total": "0.538",
        "ok": "-",
        "ko": "0.538"
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
        "total": "273",
        "ok": "-",
        "ko": "273"
    },
    "maxResponseTime": {
        "total": "345",
        "ok": "-",
        "ko": "345"
    },
    "meanResponseTime": {
        "total": "296",
        "ok": "-",
        "ko": "296"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "percentiles1": {
        "total": "283",
        "ok": "-",
        "ko": "283"
    },
    "percentiles2": {
        "total": "305",
        "ok": "-",
        "ko": "305"
    },
    "percentiles3": {
        "total": "337",
        "ok": "-",
        "ko": "337"
    },
    "percentiles4": {
        "total": "343",
        "ok": "-",
        "ko": "343"
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
        "total": "0.538",
        "ok": "-",
        "ko": "0.538"
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
