import {Component, EventEmitter, Output}   from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser/src/browser/title";
import {GameSettings} from "./settings";

@Component({
    styleUrls: ['app/settings/settings.css'],
    templateUrl: 'app/settings/settings.component.html'
})
export class SettingsComponent {
    gameTypes:string[] = GameSettings.gameTypes;
    @Output() onSettingsUpdated: EventEmitter<GameSettings> = new EventEmitter<GameSettings>(false);

    private _title = new Title();

    constructor(public model:GameSettings,
                private _router:Router) {
        //this._title.setTitle('Game settings');
    }

    onSubmit() {
        this.onSettingsUpdated.emit(this.model);
        this.go2game();
    }

    go2game() {
        this._router.navigate(['Cards']);
    }
}
