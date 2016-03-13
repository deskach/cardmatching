import {ImgCardService} from "../card/img/img.card.service";
import {TextCardService} from "../card/text/text.card.service";
import {FindPairGame} from "../game/find-pair/find-pair.game";
import {IGame} from "../game/igame";
import {Injectable} from "angular2/core";

@Injectable()
export class GameSettings {
    static pictures = 'Pictures';
    static letters = 'Letters';
    static gameTypes = [GameSettings.pictures, GameSettings.letters];

    public cardTypes = [GameSettings.gameTypes[0], GameSettings.gameTypes[0]];
    public game:IGame = null;

    private _name2service = {};

    constructor() {
        this._name2service[GameSettings.pictures] = new ImgCardService();
        this._name2service[GameSettings.letters] = new TextCardService();

        Promise.all([this.update()]).then(null);
    }

    public update() {
        this.game = FindPairGame.create(this._name2service[this.cardTypes[0]], this._name2service[this.cardTypes[1]]);

        return this.game.init();
    }
}