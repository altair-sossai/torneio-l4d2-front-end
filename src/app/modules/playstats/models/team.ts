import { Player } from "./player";

export interface Team {
    score: number;
    players: Player[];
    common: number;
    siKilled: number;
    siDamage: number;
    dmgTotal: number;
    dmgTank: number;
}
