import { Component } from "angular2/core";
import { RouteConfig, RouterOutlet, ROUTER_DIRECTIVES } from "angular2/router";

import { TripListComponent } from "./trip-list.component";
import { TripEditComponent } from "./trip-edit.component";

@Component({
    selector: "trip-app",
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet, ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/trips", name: "Trips", component: TripListComponent, useAsDefault: true },
    { path: "/trip/:id", name: "TripEdit", component: TripEditComponent }
])
export class TripComponent {}