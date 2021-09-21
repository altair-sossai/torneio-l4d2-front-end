import { Jogador } from "../../jogadores/models/jogador";
import { Time } from "./time";
import { TimeJogador } from "./time-jogador";

export class TimesJogadores {
    constructor(data: any) {
        this.jogadores = data?.jogadores || [];
        this.times = data?.times || [];
        this.vinculos = data?.vinculos || [];
    }

    public jogadores: Jogador[] = [];
    public times: Time[] = [];
    public vinculos: TimeJogador[] = [];

    vincular(): void {
        const jogadores: any = this.jogadores.reduce((previous, jogador) => ({ ...previous, [jogador.steamId]: jogador }), {})
        const times: any = this.times.reduce((previous, time) => ({ ...previous, [time.codigo]: time }), {})

        for (const vinculo of this.vinculos) {
            const jogador = jogadores[vinculo.jogador] as Jogador;
            const time = times[vinculo.time] as Time;

            if (!jogador || !time)
                continue;

            if (!time.jogadores)
                time.jogadores = [];

            time.jogadores.push(jogador);
        }
    }
}
