import { StatusConfronto } from "../enums/status-confronto";

export class Confronto {
    public rodada: number | undefined;
    public data: Date | undefined;
    public status: StatusConfronto | undefined;
    public campanha!: number;
    public timeA: string | undefined;
    public timeB: string | undefined;
    public pontosConquistadosTimeA: number | undefined;
    public pontosConquistadosTimeB: number | undefined;
    public penalidadeTimeA: number | undefined;
    public penalidadeTimeB: number | undefined;
    public motivoPenalidadeTimeA: string | undefined;
    public motivoPenalidadeTimeB: string | undefined;
}
