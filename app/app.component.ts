import {Component}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CardService} from "./card/card.service";
import {CardListComponent} from "./cards-list/card-list.component";
import {SettingsComponent} from "./settings/settings.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>Play card-matching</h1>
    <nav>
      <a [routerLink]="['Cards']">Play</a>
      <a [routerLink]="['Settings']">Configure</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    providers: [CardService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/cards', name: 'Cards', component: CardListComponent, useAsDefault: true},
    {path: '/settings', name: 'Settings', component: SettingsComponent}
])
export class AppComponent {
}
