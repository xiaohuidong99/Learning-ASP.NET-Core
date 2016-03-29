import {Component} from "angular2/core";

export interface ITrip {
    name: string;
    created: Date;
}

@Component({
    selector: "trip-app",
    templateUrl: "./trip.component.html"
})

export class TripComponent {
    private trips: ITrip[] = [
        { name: "US Trip", created: new Date() },
        { name: "World Trip", created: new Date() }
    ];
}