import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import { TripListComponent } from "./trip-list.component";
import { TripEditComponent } from "./trip-edit.component";

import { TripsService } from "./trips.service";

@Component({
    selector: "my-app",
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, TripsService]
})

@RouteConfig([
    { path: "/trips", name: "TripsList", component: TripListComponent, useAsDefault: true },
    { path: "/trip/:name", name: "TripEdit", component: TripEditComponent }
])

export class AppComponent {}