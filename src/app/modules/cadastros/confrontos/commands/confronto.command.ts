import { StatusConfronto } from "../enums/status-confronto";

export class ConfrontoCommand {
    public id: string | undefined;
    public rodada: number | undefined;
    public data: Date | undefined;
    public status!: StatusConfronto;
    public codigoCampanha!: number;
    public codigoTimeA: string | undefined;
    public codigoTimeB: string | undefined;
    public pontosConquistadosTimeA!: number;
    public pontosConquistadosTimeB!: number;
    public penalidadeTimeA!: number;
    public penalidadeTimeB!: number;
    public observacoes: string | undefined;
}
