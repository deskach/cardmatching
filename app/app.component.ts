import {Component, provide}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CardListComponent} from "./cards-list/card-list.component";
import {SettingsComponent} from "./settings/settings.component";
import {GameSettings} from "./settings/settings";
import {Router} from "angular2/router";

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <li [class.active]="activeTab == 'cards'">
                    <a [routerLink]="['Cards']" class="navbar-link">Play</a>
                </li>
                <li [class.active]="activeTab == 'settings'">
                    <a [routerLink]="['Settings']" class="navbar-link">Configure</a>
                </li>
            </ul>
        </div>
    </nav>
        <router-outlet></router-outlet>
    </div>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [GameSettings]
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
