System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Stop;
    return {
        setters:[],
        execute: function() {
            Stop = (function () {
                function Stop(id, name, arrival, longitude, latitude, order) {
                    this.id = id;
                    this.name = name;
                    this.arrival = arrival;
                    this.longitude = longitude;
                    this.latitude = latitude;
                    this.order = order;
                }
                return Stop;
            }());
            exports_1("Stop", Stop);
        }
    }
});
//# sourceMappingURL=stop.model.js.map