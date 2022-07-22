import { StatusConfronto } from "../../confrontos/enums/status-confronto";

export class PlayoffCommand {
    constructor() {
        this.confrontos = [];
        this.confrontos.push(new Confronto());
        this.confrontos.push(new Confronto());
        this.confrontos.push(new Confronto());
    }

    public id?: string;
    public rodada?: number;
    public codigoTimeA?: string;
    public codigoTimeB?: string;
    public confrontos?: Confronto[];
}

export class Confronto {
    constructor() {
        this.status = StatusConfronto.Aguardando;
        this.pontosConquistadosTimeA = 0;
        this.pontosConquistadosTimeB = 0;
        this.penalidadeTimeA = 0;
        this.penalidadeTimeB = 0;
    }

    public codigoCampanha?: number | null;
    public data?: Date | null;
    public status?: StatusConfronto;
    public pontosConquistadosTimeA?: number;
    public pontosConquistadosTimeB?: number;
    public penalidadeTimeA?: number;
    public penalidadeTimeB?: number;
    public observacoes?: string;
}