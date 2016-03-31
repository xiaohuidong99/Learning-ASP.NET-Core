System.register(["angular2/core", "angular2/http", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var TripsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            TripsService = (function () {
                function TripsService(http) {
                    this.http = http;
                }
                TripsService.prototype.getTrips = function () {
                    return this.http.get("/api/trips")
                        .map(function (response) {
                        return response.json();
                    })
                        .catch(this.handleError);
                };
                TripsService.prototype.postTrip = function (trip) {
                    var body = JSON.stringify(trip);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post("/api/trips", body, options)
                        .map(function (response) {
                        return response.json();
                    })
                        .catch(this.handleError);
                };
                TripsService.prototype.handleError = function (error) {
                    console.log(error);
                    return Rx_1.Observable.throw(error.json().error || "Server error");
                };
                TripsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TripsService);
                return TripsService;
            }());
            exports_1("TripsService", TripsService);
        }
    }
});
//# sourceMappingURL=trips.service.js.map