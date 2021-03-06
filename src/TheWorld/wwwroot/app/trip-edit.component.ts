﻿import { Component, Input, OnInit } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteParams } from "angular2/router";

import { StopFormComponent } from "./stop-form.component";

import { TripsService } from "./trips.service";

import { Stop } from "./stop.model";

import { Loading } from "./loading";
import { DatePipe } from "./date.pipe";

//declare var travelMap: any;

@Component({
    templateUrl: "./trip-edit.component.html",
    directives: [ROUTER_DIRECTIVES, Loading, StopFormComponent],
    pipes: [DatePipe]
})

export class TripEditComponent implements OnInit {
    private stops: Stop[];
    private tripName: string;

    private isBusy: boolean;
    private errorMessage: string;

    constructor(private routeParams: RouteParams, private tripsService: TripsService) {}

    ngOnInit() {
        this.tripName = this.routeParams.get('name');
        this.isBusy = true;
        this.tripsService.getStops(this.tripName)
            .subscribe(
            stops => this.stops = stops,
            error => console.log(`There was an error: ${error}`),
            () => this.isBusy = false);
        //this.showMap(this.stops);
    }

    onSubmit(newStop: Stop): void {
        this.isBusy = true;
        this.tripsService.postStop(this.tripName, newStop)
            .subscribe(
            stop => this.stops.push(stop),
            error => console.log(`There was an error: ${error}`),
            () => this.isBusy = false);
    }

    //showMap(stops: Stop[]) {
    //    if (stops && stops.length > 0) {
    //        travelMap.createMap({
    //            stops: stops,
    //            selector: "#map",
    //            currentStop: 1,
    //            initialZoom: 3
    //        });
    //    }
    //}
}