System.register(["angular2/core", "angular2/router", "./trips.service", "./loading", "./date.pipe"], function(exports_1, context_1) {
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
    var core_1, router_1, trips_service_1, loading_1, date_pipe_1;
    var TripEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trips_service_1_1) {
                trips_service_1 = trips_service_1_1;
            },
            function (loading_1_1) {
                loading_1 = loading_1_1;
            },
            function (date_pipe_1_1) {
                date_pipe_1 = date_pipe_1_1;
            }],
        execute: function() {
            ////import "travelmap/travelmap";
            TripEditComponent = (function () {
                function TripEditComponent(routeParams, tripsService) {
                    this.routeParams = routeParams;
                    this.tripsService = tripsService;
                }
                TripEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.tripName = this.routeParams.get('name');
                    this.isBusy = true;
                    this.tripsService.getStops(this.tripName)
                        .subscribe(function (stops) { return _this.stops = stops; }, function (error) { return console.log("There was an error: " + error); }, function () { return _this.isBusy = false; });
                };
                TripEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: "./trip-edit.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES, loading_1.Loading],
                        pipes: [date_pipe_1.DatePipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, trips_service_1.TripsService])
                ], TripEditComponent);
                return TripEditComponent;
            }());
            exports_1("TripEditComponent", TripEditComponent);
        }
    }
});
//# sourceMappingURL=trip-edit.component.js.map