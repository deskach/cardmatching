import {Component, EventEmitter, provide, ViewChild}   from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {CardListComponent} from "./cards-list/card-list.component";
import {SettingsComponent} from "./settings/settings.component";
import {GameSettings} from "./settings/settings";
import {GameFactory} from "./game/game-factory";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [GameSettings, GameFactory]
})
@Routes([
    {path: '/cards', component: CardListComponent},
    {path: '/settings', component: SettingsComponent},
    {path: '*', component: CardListComponent},
])
export class AppComponent {
    public activeTab:string = 'cards';

    @ViewChild(SettingsComponent) private stsComp:SettingsComponent;
    @ViewChild(CardListComponent) private cardList:CardListComponent;

    constructor(router:Router, gameFactory:GameFactory) {
        let subs = null; //TODO: refactor this when there is a way to pass arguments into router-outlet

        router.changes.subscribe(() => {
            if(subs) {
                subs.unsubscribe();
            }

            if (this.stsComp) {
                this.activeTab = "cards";
                subs = this.stsComp.onSettingsUpdated.subscribe(() => gameFactory.updateInstance());
            } else if (this.cardList) {
                this.activeTab = "settings";
            }
        });
    }
}
