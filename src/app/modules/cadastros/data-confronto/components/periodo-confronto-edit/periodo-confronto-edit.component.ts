import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { PeriodoConfrontoCommand } from '../../commands/periodo-confronto.command';
import { SugestaoDataConfrontoCommand } from '../../commands/sugestao-data-confronto.command';
import { CadastradoPor, CadastradosPor } from '../../enums/cadastrado-por.enum';
import { RespostasTimes, RespostaTime } from '../../enums/resposta-time.enum';
import { PeriodoConfrontoService } from '../../services/periodo-confronto.service';

@Component({
  selector: 'app-periodo-confronto-edit',
  templateUrl: './periodo-confronto-edit.component.html',
  styleUrls: ['./periodo-confronto-edit.component.scss']
})
export class PeriodoConfrontoEditComponent implements OnInit {

  @Input() confrontoId: string | undefined;
  command?: PeriodoConfrontoCommand;
  busy = false;

  cadastradosPor = CadastradosPor;
  respostasTimes = RespostasTimes;

  constructor(
    private modal: NzModalRef,
    private messageService: NzMessageService,
    private periodoConfrontoService: PeriodoConfrontoService) {
  }

  ngOnInit(): void {
    this.periodoConfrontoService.get(this.confrontoId!).subscribe({
      next: periodo => this.command = periodo,
      error: error => this.error(error)
    })
  }

  novaSugestao(): void {
    const command = new SugestaoDataConfrontoCommand();

    command.data = new Date();
    command.cadastradoPor = CadastradoPor.Administrador;
    command.respostaTimeA = RespostaTime.SemResposta;
    command.respostaTimeB = RespostaTime.SemResposta;

    this.command?.sugestoes.push(command);
  }

  excluirSugestao(sugestao: SugestaoDataConfrontoCommand): void {
    this.command?.sugestoes.splice(this.command.sugestoes.indexOf(sugestao), 1);
  }

  salvar(): void {
    if (this.command == null)
      return;

    this.busy = true;

    this.periodoConfrontoService.post(this.confrontoId!, this.command).subscribe(() => {
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
