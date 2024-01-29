var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10",
        "ok": "9",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "341",
        "ok": "341",
        "ko": "394"
    },
    "maxResponseTime": {
        "total": "1100",
        "ok": "1100",
        "ko": "394"
    },
    "meanResponseTime": {
        "total": "506",
        "ok": "518",
        "ko": "394"
    },
    "standardDeviation": {
        "total": "212",
        "ok": "220",
        "ko": "0"
    },
    "percentiles1": {
        "total": "419",
        "ok": "421",
        "ko": "394"
    },
    "percentiles2": {
        "total": "512",
        "ok": "521",
        "ko": "394"
    },
    "percentiles3": {
        "total": "880",
        "ok": "905",
        "ko": "394"
    },
    "percentiles4": {
        "total": "1056",
        "ok": "1061",
        "ko": "394"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 8,
    "percentage": 80
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 10
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
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.909",
        "ok": "0.818",
        "ko": "0.091"
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "341",
        "ok": "341",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1100",
        "ok": "1100",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "271",
        "ok": "271",
        "ko": "-"
    },
    "percentiles1": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles2": {
        "total": "521",
        "ok": "521",
        "ko": "-"
    },
    "percentiles3": {
        "total": "984",
        "ok": "984",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1077",
        "ok": "1077",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 20
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
        "total": "0.455",
        "ok": "0.455",
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
        "total": "5",
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "355",
        "ok": "355",
        "ko": "394"
    },
    "maxResponseTime": {
        "total": "612",
        "ok": "612",
        "ko": "394"
    },
    "meanResponseTime": {
        "total": "440",
        "ok": "451",
        "ko": "394"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "96",
        "ko": "0"
    },
    "percentiles1": {
        "total": "417",
        "ok": "419",
        "ko": "394"
    },
    "percentiles2": {
        "total": "421",
        "ok": "469",
        "ko": "394"
    },
    "percentiles3": {
        "total": "574",
        "ok": "583",
        "ko": "394"
    },
    "percentiles4": {
        "total": "604",
        "ok": "606",
        "ko": "394"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4,
    "percentage": 80
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
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.455",
        "ok": "0.364",
        "ko": "0.091"
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
