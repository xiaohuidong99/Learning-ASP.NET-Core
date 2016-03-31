System.register(["angular2/core", "angular2/http", "angular2/router", "./trip-form.component", "./trips.service", "./date.pipe", "./loading"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, trip_form_component_1, trips_service_1, date_pipe_1, loading_1;
    var TripListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trip_form_component_1_1) {
                trip_form_component_1 = trip_form_component_1_1;
            },
            function (trips_service_1_1) {
                trips_service_1 = trips_service_1_1;
            },
            function (date_pipe_1_1) {
                date_pipe_1 = date_pipe_1_1;
            },
            function (loading_1_1) {
                loading_1 = loading_1_1;
            }],
        execute: function() {
            TripListComponent = (function () {
                function TripListComponent(tripsService, router) {
                    this.tripsService = tripsService;
                    this.router = router;
                }
                TripListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isBusy = true;
                    this.tripsService.getTrips()
                        .subscribe(function (trips) { return _this.trips = trips; }, function (error) { return console.log("There was an error: " + error); }, function () { return _this.isBusy = false; });
                };
                TripListComponent.prototype.onSubmit = function (newTrip) {
                    var _this = this;
                    this.isBusy = true;
                    this.tripsService.postTrip(newTrip)
                        .subscribe(function (trip) { return _this.trips.push(trip); }, function (error) { return console.log("There was an error: " + error); }, function () { return _this.isBusy = false; });
                };
                TripListComponent.prototype.onSelect = function (selectedTrip) {
                    this.router.navigate(["TripDetail", { id: selectedTrip.id }]);
                };
                TripListComponent = __decorate([
                    core_1.Component({
                        selector: "trip-list",
                        templateUrl: "./trip.list.component.html",
                        providers: [http_1.HTTP_PROVIDERS, trips_service_1.TripsService, router_1.Router],
                        directives: [trip_form_component_1.TripFormComponent, loading_1.Loading],
                        pipes: [date_pipe_1.DatePipe]
                    }), 
                    __metadata('design:paramtypes', [trips_service_1.TripsService, router_1.Router])
                ], TripListComponent);
                return TripListComponent;
            }());
            exports_1("TripListComponent", TripListComponent);
        }
    }
});
//# sourceMappingURL=trip-list.component.js.map