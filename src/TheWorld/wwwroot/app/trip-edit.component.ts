import { Component, Input } from "angular2/core";
import { ROUTER_DIRECTIVES } from "angular2/router";

import { TripsService } from "./trips.service";

import { Trip } from "./trip"

@Component({
    selector: "trip-edit",
    templateUrl: "trip-edit.component",
    directives: [ROUTER_DIRECTIVES]
})
export class TripEditComponent {
    //@Input() trip: Trip;
}