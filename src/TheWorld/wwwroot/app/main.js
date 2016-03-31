///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
System.register(["angular2/platform/browser", "angular2/router", "./trip.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, trip_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trip_component_1_1) {
                trip_component_1 = trip_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(trip_component_1.TripComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map