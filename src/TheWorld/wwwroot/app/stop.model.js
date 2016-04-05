System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Stop;
    return {
        setters:[],
        execute: function() {
            Stop = (function () {
                function Stop(name, arrival) {
                    this.name = name;
                    this.arrival = arrival;
                }
                return Stop;
            }());
            exports_1("Stop", Stop);
        }
    }
});
//# sourceMappingURL=stop.model.js.map