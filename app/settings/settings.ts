export class GameSettings {
    static pictures = 'Pictures';
    static letters = 'Letters';
    static gameTypes = [GameSettings.pictures, GameSettings.letters];

    cardTypes = [GameSettings.gameTypes[0], GameSettings.gameTypes[0]];
    updated = false;
}