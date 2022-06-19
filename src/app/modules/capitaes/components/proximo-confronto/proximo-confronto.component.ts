import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { StatusConfronto } from 'src/app/modules/cadastros/confrontos/enums/status-confronto';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';
import { ConfrontoService } from 'src/app/modules/cadastros/confrontos/services/confronto.service';
import { CadastradoPor } from 'src/app/modules/cadastros/data-confronto/enums/cadastrado-por.enum';
import { RespostasTimes, RespostaTime } from 'src/app/modules/cadastros/data-confronto/enums/resposta-time.enum';
import { PeriodoConfrontoModel } from 'src/app/modules/cadastros/data-confronto/models/periodo-confronto.model';
import { SugestaoDataConfrontoModel } from 'src/app/modules/cadastros/data-confronto/models/sugestao-data-confronto.model';
import { PeriodoConfrontoService } from 'src/app/modules/cadastros/data-confronto/services/periodo-confronto.service';
import { Capitao } from 'src/app/modules/cadastros/jogadores/models/capitao';
import { CapitaoService } from 'src/app/modules/cadastros/jogadores/services/capitao.service';
import { Time } from 'src/app/modules/cadastros/times/models/time';
import { ResponderSugestaoDataComponent } from '../responder-sugestao-data/responder-sugestao-data.component';
import { SugerirNovaDataComponent } from '../sugerir-nova-data/sugerir-nova-data.component';

@Component({
  selector: 'app-proximo-confronto',
  templateUrl: './proximo-confronto.component.html',
  styleUrls: ['./proximo-confronto.component.scss']
})
export class ProximoConfrontoComponent implements OnInit {

  CadastradoPor = CadastradoPor;
  RespostaTime = RespostaTime;

  confrontos?: Confronto[] | null;

  busy = false;
  capitao?: Capitao | null;
  confronto?: Confronto | null;
  time?: Time | null;
  adversario?: Time | null;
  periodo?: PeriodoConfrontoModel | null;

  respostasTimes = RespostasTimes;

  constructor(
    private router: Router,
    private modalService: NzModalService,
    private messageService: NzMessageService,
    private capitaoService: CapitaoService,
    private confrontoService: ConfrontoService,
    private periodoConfrontoService: PeriodoConfrontoService) {
  }

  ngOnInit() {
    this.capitao = this.capitaoService.current();
    this.carregarConfrontos();
  }

  carregarConfrontos(): void {
    this.confrontoService.get().subscribe({
      next: confrontos => {
        this.confrontos = this.proximosConfrontos(confrontos);
        if (this.confrontos?.length === 0)
          return;
        console.log(this.confrontos);
        this.confronto = this.confrontos![0];
        this.carregarDadosConfronto();
      }, error: () => this.busy = false
    })
  }

  carregarDadosConfronto() {
    if (!this.confronto)
      return;

    this.time = this.meuTime(this.confronto);
    this.adversario = this.meuAdversario(this.confronto);
    this.carregarPeriodo(this.confronto?.id);
  }

  atualizar(): void {
    this.busy = true;
    this.time = null;
    this.adversario = null;
    this.periodo = null;

    this.carregarDadosConfronto();
  }

  carregarPeriodo(confrontoId?: string): void {
    if (!confrontoId)
      return;

    this.periodoConfrontoService.get(confrontoId).subscribe({
      next: periodo => {
        periodo.inicio = new Date(periodo.inicio!);
        periodo.fim = new Date(periodo.fim!);

        this.busy = false;
        this.periodo = periodo;
      }, error: () => this.busy = false
    })
  }

  proximosConfrontos(confrontos?: Confronto[]): Confronto[] | undefined {
    if (!confrontos?.length)
      return undefined;

    return confrontos.filter(c => c.status == StatusConfronto.Aguardando && (c.timeA?.capitao?.steamId == this.capitao?.steamId || c.timeB.capitao?.steamId == this.capitao?.steamId));
  }

  meuTime(confronto?: Confronto): Time | undefined {
    if (!confronto)
      return undefined;

    return this.capitao?.steamId == this.confronto?.timeA?.capitao?.steamId ? this.confronto?.timeA : this.confronto?.timeB;
  }

  meuAdversario(confronto?: Confronto): Time | undefined {
    if (!confronto)
      return undefined;

    return this.capitao?.steamId == this.confronto?.timeA?.capitao?.steamId ? this.confronto?.timeB : this.confronto?.timeA;
  }

  sugeridoPorMim(sugestao: SugestaoDataConfrontoModel): boolean {
    return this.sugeridoPeloTime(sugestao, this.time!);
  }

  sugeridoPeloAdversario(sugestao: SugestaoDataConfrontoModel): boolean {
    return this.sugeridoPeloTime(sugestao, this.adversario!);
  }

  respostaMeuTime(sugestao: SugestaoDataConfrontoModel): RespostaTime {
    return this.respostaTime(sugestao, this.time!);
  }

  respostaMeuAdversario(sugestao: SugestaoDataConfrontoModel): RespostaTime {
    return this.respostaTime(sugestao, this.adversario!);
  }

  respostaTime(sugestao: SugestaoDataConfrontoModel, time: Time): RespostaTime {
    if (time.codigo == this.confronto?.timeA.codigo)
      return sugestao.respostaTimeA!;

    if (time.codigo == this.confronto?.timeB.codigo)
      return sugestao.respostaTimeB!;

    return RespostaTime.SemResposta;
  }

  sugeridoPeloTime(sugestao: SugestaoDataConfrontoModel, time: Time): boolean {
    return (sugestao.cadastradoPor == CadastradoPor.TimeA && time?.codigo == this.confronto?.timeA.codigo)
      || (sugestao.cadastradoPor == CadastradoPor.TimeB && time?.codigo == this.confronto?.timeB.codigo);
  }

  responder(sugestao: SugestaoDataConfrontoModel) {
    this.modalService.create({
      nzTitle: 'Responder sugestão de data',
      nzContent: ResponderSugestaoDataComponent,
      nzComponentParams: {
        confronto: this.confronto!,
        sugestao
      },
      nzOnOk: () => this.atualizar()
    });
  }

  excluirSugestao(sugestao: SugestaoDataConfrontoModel) {
    this.modalService.confirm({
      nzTitle: 'Deseja realmente excluir?',
      nzOnOk: () => {
        this.busy = true;
        this.periodoConfrontoService.excluirSugestaoData(this.confronto?.id!, sugestao.id!).subscribe(_ => {
          this.atualizar();
        }, _ => {
          this.busy = false;
          this.messageService.create('error', 'Ocorreu um erro');
        });
      }
    });
  }

  sugerirNovaData(): void {
    this.modalService.create({
      nzTitle: 'Sugerir uma nova data',
      nzContent: SugerirNovaDataComponent,
      nzComponentParams: {
        confronto: this.confronto!,
        periodo: this.periodo!
      },
      nzOnOk: () => this.atualizar(),
      nzStyle: this.mobile() ? { top: '10px' } : undefined
    });
  }

  sair(): void {
    this.capitao?.logOff();
    this.router.navigate(['/']);
  }

  mobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
