import { Component, OnInit } from '@angular/core';
import { StatusConfronto } from 'src/app/modules/cadastros/confrontos/enums/status-confronto';
import { Confronto } from 'src/app/modules/cadastros/confrontos/models/confronto';
import { ConfrontoService } from 'src/app/modules/cadastros/confrontos/services/confronto.service';
import { Capitao } from 'src/app/modules/cadastros/jogadores/models/capitao';
import { CapitaoService } from 'src/app/modules/cadastros/jogadores/services/capitao.service';
import { Time } from 'src/app/modules/cadastros/times/models/time';

@Component({
  selector: 'app-proximo-confronto',
  templateUrl: './proximo-confronto.component.html',
  styleUrls: ['./proximo-confronto.component.scss']
})
export class ProximoConfrontoComponent implements OnInit {

  busy = false;
  capitao?: Capitao | null;
  confronto?: Confronto;
  adversario?: Time | undefined;

  constructor(
    private capitaoService: CapitaoService,
    private confrontoService: ConfrontoService) {
  }

  ngOnInit() {
    this.atualizar();
  }

  atualizar(): void {
    this.busy = true;
    this.capitao = this.capitaoService.current();
    this.confrontoService.get().subscribe({
      next: confrontos => {
        this.busy = false;
        this.confronto = this.proximoConfronto(confrontos);
        this.adversario = this.capitao?.steamId == this.confronto?.timeA?.capitao.steamId ? this.confronto?.timeB : this.confronto?.timeA;
      },
      error: () => this.busy = false
    })
  }

  proximoConfronto(confrontos: Confronto[]): Confronto | undefined {
    return confrontos.find(c => c.status == StatusConfronto.Aguardando && (c.timeA.capitao.steamId == this.capitao?.steamId || c.timeB.capitao.steamId == this.capitao?.steamId));
  }
}
