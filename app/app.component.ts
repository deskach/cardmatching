import {Component, provide}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CardListComponent} from "./cards-list/card-list.component";
import {SettingsComponent} from "./settings/settings.component";
import {FindPairGame} from "./game/find-pair/find-pair.game";
import {IGame} from "./game/igame";
import {ICardService} from "./card/icard.service";
import {TextCardService} from "./card/text/text.card.service";

@Component({
    selector: 'my-app',
    template: `
    <h1>Card-matching</h1>
    <nav>
      <a [routerLink]="['Cards']">Play</a>
      <a [routerLink]="['Settings']">Configure</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        provide(IGame, {
            useFactory: () => {
                //TODO: Check when 'deps' option starts working and make use of it
                return FindPairGame.create(new TextCardService(), new TextCardService())
            }
        })
    ]
})
@RouteConfig([
    {path: '/cards', name: 'Cards', component: CardListComponent, useAsDefault: true},
    {path: '/settings', name: 'Settings', component: SettingsComponent}
])
export class AppComponent {
}
