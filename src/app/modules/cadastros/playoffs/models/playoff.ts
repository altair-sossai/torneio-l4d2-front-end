import { Campanha } from "../../campanhas/models/campanha";
import { StatusConfronto } from "../../confrontos/enums/status-confronto";
import { Time } from "../../times/models/time";
import { StatusPlayoff } from "../enums/status-playoff";

export class Playoff {
    public id?: string;
    public rodada?: number;
    public codigoTimeA?: string;
    public codigoTimeB?: string;
    public timeA!: Time;
    public timeB!: Time;
    public quantidadeVitoriasTimeA?: number;
    public quantidadeVitoriasTimeB?: number;
    public quantidadeConfrontosRealizados?: number;
    public status?: StatusPlayoff;
    public codigoTimeVencedor?: string;
    public codigoTimePerdedor?: string;
    public timeVencedor!: Time;
    public timePerdedor!: Time;
    public confrontos?: Confronto[];
}

export class Confronto {
    public codigoCampanha?: number;
    public campanha?: Campanha;
    public data?: string;
    public status!: StatusConfronto;
    public pontosConquistadosTimeA!: number;
    public pontosConquistadosTimeB!: number;
    public penalidadeTimeA!: number;
    public penalidadeTimeB!: number;
    public timeAVenceu?: boolean;
    public timeBVenceu?: boolean;
    public observacoes?: string;
}