import {ImgCardService} from "../card/img/img.card.service";
import {TextCardService} from "../card/text/text.card.service";
import {FindPairGame} from "../game/find-pair/find-pair.game";
import {IGame} from "../game/igame";
import {Injectable} from "angular2/core";

//TODO: Implement number-of-cards setting
//TODO: Implement 'old values' by introducing currValues and model GameSettings vars in the SettingsComponent

@Injectable()
export class GameSettings {
    static pictures = 'Pictures';
    static letters = 'Letters';
    static gameTypes = [GameSettings.pictures, GameSettings.letters];

    public cardTypes = [GameSettings.gameTypes[0], GameSettings.gameTypes[0]];
    public isNight = false;
    public game:IGame = null;

    private _name2service = {};

    constructor() {
        this._name2service[GameSettings.pictures] = new ImgCardService();
        this._name2service[GameSettings.letters] = new TextCardService();

        this.update(); //TODO: Move update into GameFactory.getInstance() and inject it wherever game is needed
    }

    public update() {
        this.game = FindPairGame.create(
            this._name2service[this.cardTypes[0]],
            this._name2service[this.cardTypes[1]],
            this.isNight
        );

        return this.game.init();
    }
}