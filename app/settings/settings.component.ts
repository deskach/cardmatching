import {Component}   from 'angular2/core';
import {GameSettings} from "./settings";
import {Router} from "angular2/router";
import {Title} from "angular2/src/platform/browser/title";

@Component({
    styleUrls: ['app/settings/settings.css'],
    templateUrl: 'app/settings/settings.component.html'
})
export class SettingsComponent {
    gameTypes:string[] = GameSettings.gameTypes;

    constructor(public model:GameSettings,
                private _router:Router,
                title: Title
    ) {
        title.setTitle('Game settings');
    }

    onSubmit() {
        this.model.update().then(() => {
            this.go2game();
        });
    }

    go2game() {
        this._router.navigate(['Cards']);
    }
}
