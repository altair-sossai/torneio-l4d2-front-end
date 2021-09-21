import { Jogador } from "../../jogadores/models/jogador";

export class Time {
    public codigo!: string;
    public nome: string | undefined;
    public jogadores: Jogador[] = [];
}
