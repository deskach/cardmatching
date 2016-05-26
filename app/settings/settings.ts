import {Injectable} from "@angular/core";

//TODO: Implement number-of-cards setting
//TODO: Implement 'old values' by introducing currValues inside SettingsComponent

@Injectable()
export class GameSettings {
    static pictures = 'Pictures';
    static letters = 'Letters';
    static gameTypes = [GameSettings.pictures, GameSettings.letters];

    public cardTypes = [GameSettings.gameTypes[0], GameSettings.gameTypes[0]];
    public isNight = false;
    public numberOfPairs = 7;
}
