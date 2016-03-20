import {Injectable} from "angular2/core";
import {GameSettings} from "../settings/settings";
import {IGame} from "./igame";
import {FindPairGame} from "./find-pair/find-pair.game";
import {ImgCardService} from "../card/img/img.card.service";
import {TextCardService} from "../card/text/text.card.service";

@Injectable()
export class GameFactory {
    private _name2service = {};
    private _game:IGame;

    constructor(private _sts:GameSettings) {
        this._name2service[GameSettings.pictures] = new ImgCardService();
        this._name2service[GameSettings.letters] = new TextCardService();
    }

    public getInstance() {
        if (this._game) {
            return this._game;
        }

        return this.createInstance();
    }

    public createInstance() {
        this._game = FindPairGame.create(
            this._name2service[this._sts.cardTypes[0]],
            this._name2service[this._sts.cardTypes[1]],
            this._sts.isNight
        );

        return this._game;
    }

    public updateInstance() {
        this.createInstance();
    }
}