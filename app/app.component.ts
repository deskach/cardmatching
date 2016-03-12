import {Component, provide}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CardListComponent} from "./cards-list/card-list.component";
import {SettingsComponent} from "./settings/settings.component";
import {FindPairGame} from "./game/find-pair/find-pair.game";
import {IGame} from "./game/igame";
import {ICardService} from "./card/icard.service";
import {TextCardService} from "./card/text/text.card.service";
import {ImgCardService} from "./card/img/img.card.service";
import {GameSettings} from "./settings/settings";

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
        TextCardService,
        ImgCardService,
        provide(GameSettings, {useValue: AppComponent.sts}),
        provide(IGame, {
            useFactory: AppComponent.getGameFactory(),
            deps: AppComponent.getGameServices()
        }),
    ]
})
@RouteConfig([
    {path: '/cards', name: 'Cards', component: CardListComponent, useAsDefault: true},
    {path: '/settings', name: 'Settings', component: SettingsComponent}
])
export class AppComponent {
    public static sts = new GameSettings();

    public static getGameFactory() {
        return FindPairGame.create;
    }

    public static getGameServices() {
        let name2service = {};
        name2service[GameSettings.pictures] = ImgCardService;
        name2service[GameSettings.letters] = TextCardService;

        return [name2service[AppComponent.sts.cardTypes[0]], name2service[AppComponent.sts.cardTypes[1]]];
    }
}
