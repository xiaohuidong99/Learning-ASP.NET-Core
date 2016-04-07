import { Injectable } from "angular2/core";
import { Http, Response, Headers, RequestOptions } from "angular2/http";
import { Observable } from "rxjs/Rx";

import { Trip } from "./trip.model";
import { Stop } from "./stop.model";

@Injectable()
export class TripsService {
    constructor(private http: Http) {}

    getTrips() {
        return this.http.get("/api/trips")
            .map((response: Response) =>
                <Trip[]>response.json()
            )
            .catch(this.handleError);
    }

    postTrip(trip: Trip): Observable<Trip> {
        const body = JSON.stringify(trip);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post("/api/trips", body, options)
            .map((response: Response) =>
                <Trip>response.json()
            )
            .catch(this.handleError);
    }

    getStops(tripName: string) {
        return this.http.get(`/api/trips/${tripName}/stops`)
            .map((response: Response) =>
                <Stop[]>response.json()
            )
            .catch(this.handleError);
    }

    postStop(tripName: string, stop: Stop): Observable<Stop> {
        const body = JSON.stringify(stop);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(`/api/trips/${tripName}/stops`, body, options)
            .map((response: Response) =>
                <Stop>response.json()
            )
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
    }
}