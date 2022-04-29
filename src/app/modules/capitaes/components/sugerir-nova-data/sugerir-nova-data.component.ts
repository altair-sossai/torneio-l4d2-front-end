import { Component, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';
import { NovaSugestaoDataCommand } from 'src/app/modules/cadastros/data-confronto/commands/nova-sugestao-data.command';
import { PeriodoConfrontoModel } from 'src/app/modules/cadastros/data-confronto/models/periodo-confronto.model';
import { PeriodoConfrontoService } from 'src/app/modules/cadastros/data-confronto/services/periodo-confronto.service';

@Component({
  selector: 'app-sugerir-nova-data',
  templateUrl: './sugerir-nova-data.component.html',
  styleUrls: ['./sugerir-nova-data.component.scss']
})
export class SugerirNovaDataComponent {

  @Input() confronto!: Confronto;
  @Input() periodo!: PeriodoConfrontoModel | null;

  busy = false;
  command = new NovaSugestaoDataCommand();

  constructor(
    private modal: NzModalRef,
    private messageService: NzMessageService,
    private periodoConfrontoService: PeriodoConfrontoService) {
  }

  salvar(): void {
    if (this.command == null)
      return;

    this.busy = true;

    this.periodoConfrontoService.sugerirNovaData(this.confronto.id!, this.command).subscribe(() => {
      this.modal.triggerOk();
      this.busy = false;
    }, result => {
      this.busy = false;
      this.error(result.error);
    });
  }

  close(): void {
    this.modal.destroy();
  }

  error(erro: any): void {

    if (erro?.allErros?.length)
      this.messageService.create('error', erro.allErros[0], { nzDuration: 5000 });
    else if (erro?.message)
      this.messageService.create('error', erro.message, { nzDuration: 5000 });
    else
      this.messageService.create('error', 'Ocorreu um erro inesperado');

    console.log(erro);
  }
}
