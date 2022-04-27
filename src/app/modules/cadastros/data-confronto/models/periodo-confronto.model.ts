import { SugestaoDataConfrontoModel } from "./sugestao-data-confronto.model";

export class PeriodoConfrontoModel {
    public confrontoId: string | undefined;
    public inicio: Date | undefined;
    public fim: Date | undefined;
    public sugestoes!: SugestaoDataConfrontoModel[];
}
