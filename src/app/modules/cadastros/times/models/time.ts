import { Jogador } from "../../jogadores/models/jogador";

export class Time {
    public codigo!: string;
    public nome!: string;
    public jogadores: Jogador[] = [];
}
