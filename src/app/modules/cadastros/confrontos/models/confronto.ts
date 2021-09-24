import { Campanha } from "../../campanhas/models/campanha";
import { Time } from "../../times/models/time";
import { StatusConfronto } from "../enums/status-confronto";

export class Confronto {
    public rodada: number | undefined;
    public data: Date | undefined;
    public status!: StatusConfronto;
    public codigoCampanha!: number;
    public codigoTimeA: string | undefined;
    public codigoTimeB: string | undefined;
    public codigoTimeVencedor: string | undefined;
    public pontosConquistadosTimeA!: number;
    public pontosConquistadosTimeB!: number;
    public penalidadeTimeA!: number;
    public penalidadeTimeB!: number;
    public observacoes: string | undefined;
    public campanha!: Campanha;
    public timeA!: Time;
    public timeB!: Time;
    public timeVencedor!: Time;
}
