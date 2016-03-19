import {Component, provide}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CardListComponent} from "./cards-list/card-list.component";
import {SettingsComponent} from "./settings/settings.component";
import {GameSettings} from "./settings/settings";
import {Router} from "angular2/router";
import {Title} from "angular2/src/platform/browser/title";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [GameSettings, Title]
})
@RouteConfig([
    {path: '/cards', name: 'Cards', component: CardListComponent, useAsDefault: true},
    {path: '/settings', name: 'Settings', component: SettingsComponent}
])
export class AppComponent {
    activeTab = 'cards';

    constructor(private _router:Router) {
        _router.subscribe((value) => {
            this.activeTab = value;
        });
    }
}
