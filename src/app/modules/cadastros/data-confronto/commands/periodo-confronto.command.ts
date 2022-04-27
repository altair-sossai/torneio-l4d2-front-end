import { SugestaoDataConfrontoCommand } from "./sugestao-data-confronto.command";

export class PeriodoConfrontoCommand {
    public inicio: Date | undefined;
    public fim: Date | undefined;
    public sugestoes!: SugestaoDataConfrontoCommand[];
}
