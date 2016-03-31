System.register(["angular2/core", "angular2/router", "./trip-list.component", "./trip-edit.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, trip_list_component_1, trip_edit_component_1;
    var TripComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trip_list_component_1_1) {
                trip_list_component_1 = trip_list_component_1_1;
            },
            function (trip_edit_component_1_1) {
                trip_edit_component_1 = trip_edit_component_1_1;
            }],
        execute: function() {
            TripComponent = (function () {
                function TripComponent() {
                }
                TripComponent = __decorate([
                    core_1.Component({
                        selector: "trip-app",
                        template: "\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: "/trips", name: "Trips", component: trip_list_component_1.TripListComponent, useAsDefault: true },
                        { path: "/trip/:id", name: "TripEdit", component: trip_edit_component_1.TripEditComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TripComponent);
                return TripComponent;
            }());
            exports_1("TripComponent", TripComponent);
        }
    }
});
//# sourceMappingURL=trip.component.js.map