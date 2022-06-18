import { PeriodoConfrontoModel } from "../models/periodo-confronto.model";

export class NovaSugestaoDataCommand {
    private _dia = null;
    private _horario = null;
    private _avancado = false;

    constructor(periodo: PeriodoConfrontoModel) {
        const hoje = new Date();

        let inicio = new Date(periodo!.inicio!);

        if (hoje > inicio)
            inicio = hoje;

        const fim = new Date(periodo!.fim!);

        for (let data = inicio; data <= fim; data.setDate(data.getDate() + 1))
            this.dias.push(new Date(data));

        for (let hora = 17; hora <= 23; hora++)
            for (let minuto = 0; minuto <= 30; minuto += 30)
                this.horarios.push({ hora, minuto });
    }

    public dias: any[] = [];
    public horarios: any[] = [];

    public data: Date | undefined;

    public get avancado(): boolean {
        return this._avancado;
    }

    public set avancado(value: boolean) {
        this.dia = undefined;
        this.horario = undefined;
        this.data = undefined;
        this._avancado = value;
    }

    public get dia(): any {
        return this._dia;
    }

    public set dia(value: any) {
        this._dia = value;
        this.atualizarData();
    }

    public get horario(): any {
        return this._horario;
    }

    public set horario(value: any) {
        this._horario = value;
        this.atualizarData();
    }

    private atualizarData(): void {
        if (!this.dia || !this.horario)
            return;

        const ano = this.dia.getFullYear();
        const mes = this.dia.getMonth();
        const dia = this.dia.getDate();
        const hora = this.horario.hora;
        const minuto = this.horario.minuto;

        this.data = new Date(ano, mes, dia, hora, minuto);
    }
}
