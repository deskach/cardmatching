import {Component}   from 'angular2/core';
import {GameSettings} from "./settings";

@Component({
    templateUrl: 'app/settings/settings.component.html'
})
export class SettingsComponent {
    gameTypes:string[] = GameSettings.gameTypes;

    constructor(public model:GameSettings) {
    }
}
