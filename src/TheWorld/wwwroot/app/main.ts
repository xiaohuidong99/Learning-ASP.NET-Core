﻿///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { bootstrap } from "angular2/platform/browser";
import { ROUTER_PROVIDERS } from "angular2/router";
import { TripComponent } from "./trip.component";

bootstrap(TripComponent, [ROUTER_PROVIDERS]);