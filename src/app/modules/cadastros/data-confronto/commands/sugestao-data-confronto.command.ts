import { CadastradoPor } from "../enums/cadastrado-por.enum";
import { RespostaTime } from "../enums/resposta-time.enum";

export class SugestaoDataConfrontoCommand {
    public data: Date | undefined;
    public cadastradoPor: CadastradoPor | undefined;
    public respostaTimeA: RespostaTime | undefined;
    public respostaTimeB: RespostaTime | undefined;
}
