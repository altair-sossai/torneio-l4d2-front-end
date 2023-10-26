import { EstatisticaJogador } from "src/app/modules/institucional/enums/estatistica-jogador.enum";

export interface EstatisticaJogadorModel {
    steamId: string;
    nome: string;
    urlFotoPerfil: string;
    urlPerfilSteam: string;
    posicao: number;
    estatistica: EstatisticaJogador;
    quantidade: number;
}