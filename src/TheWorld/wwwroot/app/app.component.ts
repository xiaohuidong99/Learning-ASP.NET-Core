import { Component } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import { TripComponent } from "./trip.component";

@Component({
    selector: "my-app",
    template: `
        <h1>App Component</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: "/", name: "Trips", component: TripComponent, useAsDefault: true }
])

export class AppComponent {}