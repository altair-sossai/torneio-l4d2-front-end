import { Time } from "../../../times/models/time";
import { JogadorModel } from "./jogador.model";

export interface ConfrontoModel {
    adversario: Time;
    jogadores: JogadorModel[];
}