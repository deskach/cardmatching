import {Component, EventEmitter, provide, ViewChild}   from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Title} from "angular2/src/platform/browser/title";
import {CardListComponent} from "./cards-list/card-list.component";
import {SettingsComponent} from "./settings/settings.component";
import {GameSettings} from "./settings/settings";
import {GameFactory} from "./game/game-factory";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [GameSettings, Title, GameFactory]
})
@RouteConfig([
    {path: '/cards', name: 'Cards', component: CardListComponent, useAsDefault: true},
    {path: '/settings', name: 'Settings', component: SettingsComponent}
])
export class AppComponent {
    activeTab = 'cards';
    isGameOver = false;

    @ViewChild(SettingsComponent) private stsComp:SettingsComponent;
    @ViewChild(CardListComponent) private crdListComp:CardListComponent;

    constructor(router:Router, gameFactory:GameFactory) {
        let subs = null; //TODO: refactor this when there is a way to pass arguments into router-outlet

        router.subscribe((value) => {
            this.activeTab = value;

            if(subs) {
                subs.unsubscribe();
            }

            if (this.stsComp) {
                subs = this.stsComp.onSettingsUpdated.subscribe(() => gameFactory.updateInstance());
            } else if (this.crdListComp) {
                subs = this.crdListComp.onGameOver.subscribe(() => this.isGameOver = true);
            }
        });
    }

    clickedPlayAgain() {
        this.crdListComp.reload();
        this.isGameOver = false;
    }
}
