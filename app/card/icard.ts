export interface ICard {
    id:number;
    type: string;
    isFolded:boolean;
    isPlayable:boolean;

    clone():ICard;
}
