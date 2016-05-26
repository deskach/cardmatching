import {AppComponent}     from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import {enableProdMode} from "@angular/core";
import { bootstrap }    from '@angular/platform-browser-dynamic';

enableProdMode();

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);
