import { Component, OnInit } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { Router } from "angular2/router";

import { TripFormComponent } from "./trip-form.component";
import { TripsService } from "./trips.service";
import { Trip } from "./Trip";
import { DatePipe } from "./date.pipe";
import { Loading } from "./loading"

@Component({
    selector: "trip-list",
    templateUrl: "./trip.list.component.html",
    providers: [HTTP_PROVIDERS, TripsService, Router],
    directives: [TripFormComponent, Loading],
    pipes: [DatePipe]
})

export class TripListComponent implements OnInit {
    private trips: Trip[];
    private isBusy: boolean;

    constructor(private tripsService: TripsService, private router: Router) {}

    ngOnInit() {
        this.isBusy = true;
        this.tripsService.getTrips()
            .subscribe(
                trips => this.trips = trips,
                error => console.log(`There was an error: ${error}`),
                () => this.isBusy = false);
    }

    onSubmit(newTrip: Trip) {
        this.isBusy = true;
        this.tripsService.postTrip(newTrip)
            .subscribe(
                trip => this.trips.push(trip),
                error => console.log(`There was an error: ${error}`),
                () => this.isBusy = false);
    }

    onSelect(selectedTrip: Trip) {
        this.router.navigate(["TripDetail", { id: selectedTrip.id }]);
    }
}