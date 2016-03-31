import { Injectable } from "angular2/core";
import { Http, Response, Headers, RequestOptions } from "angular2/http";
import { Observable } from "rxjs/Rx";

import { Trip } from "./trip"

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

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || "Server error");
    }
}