import { Component, inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';
import { ResponderSugestaoDataCommand } from 'src/app/modules/cadastros/data-confronto/commands/responder-sugestao-data.command';
import { RespostaTime } from 'src/app/modules/cadastros/data-confronto/enums/resposta-time.enum';
import { SugestaoDataConfrontoModel } from 'src/app/modules/cadastros/data-confronto/models/sugestao-data-confronto.model';
import { PeriodoConfrontoService } from 'src/app/modules/cadastros/data-confronto/services/periodo-confronto.service';

@Component({
    selector: 'app-responder-sugestao-data',
    templateUrl: './responder-sugestao-data.component.html',
    styleUrls: ['./responder-sugestao-data.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ResponderSugestaoDataComponent {
  private modal = inject(NzModalRef);
  private messageService = inject(NzMessageService);
  private periodoConfrontoService = inject(PeriodoConfrontoService);


  private readonly modalData = inject<{ confronto: Confronto; sugestao: SugestaoDataConfrontoModel } | null>(
    NZ_MODAL_DATA,
    { optional: true }
  );

  RespostaTime = RespostaTime;

  @Input() confronto = this.modalData?.confronto!;
  @Input() sugestao = this.modalData?.sugestao!;

  busy = false;
  command = new ResponderSugestaoDataCommand();

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
