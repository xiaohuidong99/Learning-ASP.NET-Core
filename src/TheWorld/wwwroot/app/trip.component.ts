import { Component } from "angular2/core";
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES } from "angular2/router";

import { TripListComponent } from "./trip-list.component";
import { TripEditComponent } from "./trip-edit.component";

import { TripsService } from "./trips.service";

@Component({
    selector: "trip-app",
    template: `
        <h1>TripController</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [TripsService]
})

    @RouteConfig([
        { path: "/", name: "TripLists", component: TripListComponent, useAsDefault: true },
        //{ path: "/trip/:name", name: "TripEdit", component: TripEditComponent }
])
export class TripComponent {}