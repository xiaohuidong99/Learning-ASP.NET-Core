import { Component, OnInit } from "angular2/core";
import { Router } from "angular2/router";

import { TripFormComponent } from "./trip-form.component";

import { TripsService } from "./trips.service";

import { Trip } from "./trip.model";

import { DatePipe } from "./date.pipe";
import { Loading } from "./loading";

@Component({
    templateUrl: "./trip-list.component.html",
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

    onSubmit(newTrip: Trip) : void {
        this.isBusy = true;
        this.tripsService.postTrip(newTrip)
            .subscribe(
                trip => this.trips.push(trip),
                error => console.log(`There was an error: ${error}`),
                () => this.isBusy = false);
    }

    onSelect(selectedTrip: Trip) : void {
        this.router.navigate(["TripEdit", { name: selectedTrip.name }]);
    }
}