import { Component, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';
import { ResponderSugestaoDataCommand } from 'src/app/modules/cadastros/data-confronto/commands/responder-sugestao-data.command';
import { RespostaTime } from 'src/app/modules/cadastros/data-confronto/enums/resposta-time.enum';
import { SugestaoDataConfrontoModel } from 'src/app/modules/cadastros/data-confronto/models/sugestao-data-confronto.model';
import { PeriodoConfrontoService } from 'src/app/modules/cadastros/data-confronto/services/periodo-confronto.service';

@Component({
  selector: 'app-responder-sugestao-data',
  templateUrl: './responder-sugestao-data.component.html',
  styleUrls: ['./responder-sugestao-data.component.scss']
})
export class ResponderSugestaoDataComponent {

  RespostaTime = RespostaTime;

  @Input() confronto!: Confronto;
  @Input() sugestao!: SugestaoDataConfrontoModel;

  busy = false;
  command = new ResponderSugestaoDataCommand();

  constructor(
    private modal: NzModalRef,
    private messageService: NzMessageService,
    private periodoConfrontoService: PeriodoConfrontoService) {
  }

  salvar(): void {
    if (this.command == null)
      return;

    this.busy = true;

    this.periodoConfrontoService.responderSugestaoData(this.confronto.id!, this.sugestao.id!, this.command).subscribe(() => {
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
