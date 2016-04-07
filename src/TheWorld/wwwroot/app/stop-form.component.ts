import { Component, EventEmitter, Output } from "angular2/core";
import { FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES } from "angular2/common";
import { Stop } from "./stop.model";

@Component({
    selector: "stop-form",
    styleUrls: ["./stop-form.component.css"],
    templateUrl: "./stop-form.component.html",
    directives: [FORM_DIRECTIVES]
})
export class StopFormComponent {
    @Output() onSubmit = new EventEmitter<Stop>();

    stopForm: ControlGroup;

    arrival: Control;
    name: Control;

    // Work around until ngForm has a reset function
    active = true;

    model: Stop;

    constructor(private builder: FormBuilder) {
        this.arrival = new Control(
            "",
            Validators.compose([Validators.required/*, Validators.pattern("/^(\d{2})\/(\d{2})\/(\d{4})$/")*/])
        );
        this.name = new Control(
            "",
            Validators.compose([Validators.required, Validators.minLength(5)])
        );

        this.stopForm = builder.group({
            arrival: this.arrival,
            name: this.name
        });

        this.model = new Stop();
    }

    add() {
        this.onSubmit.emit(this.model);
        this.model = new Stop();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}