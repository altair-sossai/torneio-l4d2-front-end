import { Jogador } from "../../jogadores/models/jogador";

export class Time {
    public codigo!: string;
    public nome!: string;
    public pontosGerais!: number;
    public quantidadePartidasRealizadas!: number;
    public quantidadeVitorias!: number;
    public quantidadeEmpates!: number;
    public quantidadeDerrotas!: number;
    public totalPontosConquistados!: number;
    public totalPontosSofridos!: number;
    public totalPenalidades!: number;
    public saldoTotalPontos!: number;
    public jogadores: Jogador[] = [];
}
