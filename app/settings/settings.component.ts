import {Component, EventEmitter, Output}   from 'angular2/core';
import {Router} from "angular2/router";
import {Title} from "angular2/src/platform/browser/title";
import {GameSettings} from "./settings";

@Component({
    styleUrls: ['app/settings/settings.css'],
    templateUrl: 'app/settings/settings.component.html'
})
export class SettingsComponent {
    gameTypes:string[] = GameSettings.gameTypes;
    @Output() onSettingsUpdated: EventEmitter<GameSettings> = new EventEmitter<GameSettings>(false);

    constructor(public model:GameSettings,
                private _router:Router,
                title:Title) {
        title.setTitle('Game settings');
    }

    onSubmit() {
        this.onSettingsUpdated.emit(this.model);
        this.go2game();
    }

    go2game() {
        this._router.navigate(['Cards']);
    }
}
