import { Component, EventEmitter, Output } from "angular2/core";
import { FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES } from "angular2/common";
import { Trip } from "./trip.model";

@Component({
    selector: "trip-form",
    styleUrls: ["./trip-form.component.css"],
    templateUrl: "./trip-form.component.html",
    directives: [FORM_DIRECTIVES]
})
export class TripFormComponent {
    @Output() onSubmit = new EventEmitter<Trip>();

    tripForm: ControlGroup;

    name: Control;

    // Work around until ngForm has a reset function
    active = true;

    model: Trip;

    constructor(private builder: FormBuilder) {
        this.name = new Control(
            "",
            Validators.compose([Validators.required, Validators.minLength(5)])
        );

        this.tripForm = builder.group({
            name: this.name
        });

        this.model = new Trip("");
    }

    add() {
        this.onSubmit.emit(this.model);
        this.model = new Trip();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
