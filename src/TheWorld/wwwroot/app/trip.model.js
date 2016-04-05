System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Trip;
    return {
        setters:[],
        execute: function() {
            Trip = (function () {
                function Trip(name, created, id, stops) {
                    this.name = name;
                    this.created = created;
                    this.id = id;
                    this.stops = stops;
                }
                return Trip;
            }());
            exports_1("Trip", Trip);
        }
    }
});
//# sourceMappingURL=trip.model.js.map