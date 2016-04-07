System.register(["angular2/core", "angular2/common", "./stop.model"], function(exports_1, context_1) {
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
    var core_1, common_1, stop_model_1;
    var StopFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (stop_model_1_1) {
                stop_model_1 = stop_model_1_1;
            }],
        execute: function() {
            StopFormComponent = (function () {
                function StopFormComponent(builder) {
                    this.builder = builder;
                    this.onSubmit = new core_1.EventEmitter();
                    // Work around until ngForm has a reset function
                    this.active = true;
                    this.arrival = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required /*, Validators.pattern("/^(\d{2})\/(\d{2})\/(\d{4})$/")*/]));
                    this.name = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(5)]));
                    this.stopForm = builder.group({
                        arrival: this.arrival,
                        name: this.name
                    });
                    this.model = new stop_model_1.Stop();
                }
                StopFormComponent.prototype.add = function () {
                    var _this = this;
                    this.onSubmit.emit(this.model);
                    this.model = new stop_model_1.Stop();
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StopFormComponent.prototype, "onSubmit", void 0);
                StopFormComponent = __decorate([
                    core_1.Component({
                        selector: "stop-form",
                        styleUrls: ["./stop-form.component.css"],
                        templateUrl: "./stop-form.component.html",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], StopFormComponent);
                return StopFormComponent;
            }());
            exports_1("StopFormComponent", StopFormComponent);
        }
    }
});
//# sourceMappingURL=stop-form.component.js.map