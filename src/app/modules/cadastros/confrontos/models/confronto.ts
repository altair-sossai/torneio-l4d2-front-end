import { Campanha } from "../../campanhas/models/campanha";
import { Time } from "../../times/models/time";
import { StatusConfronto } from "../enums/status-confronto";

export class Confronto {
    public id: string | undefined;
    public rodada: number | undefined;
    public data: Date | undefined;
    public status!: StatusConfronto;
    public codigoCampanha: number | undefined;;
    public codigoTimeA: string | undefined;
    public codigoTimeB: string | undefined;
    public codigoTimeVencedor: string | undefined;
    public pontosConquistadosTimeA!: number;
    public pontosConquistadosTimeB!: number;
    public penalidadeTimeA!: number;
    public penalidadeTimeB!: number;
    public penalidadePontosGeraisTimeA!: number;
    public penalidadePontosGeraisTimeB!: number;
    public observacoes: string | undefined;
    public campanha: Campanha | undefined;;
    public timeA!: Time;
    public timeB!: Time;
    public timeVencedor!: Time;
}
