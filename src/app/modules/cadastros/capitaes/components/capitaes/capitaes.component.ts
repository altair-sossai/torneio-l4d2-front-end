import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Jogador } from '../../../jogadores/models/jogador';
import { SenhaJogador } from '../../../jogadores/models/senha-jogador';
import { JogadorService } from '../../../jogadores/services/jogador.service';
import { SenhaCapitaoComponent } from '../senha-capitao/senha-capitao.component';

@Component({
  selector: 'app-capitaes',
  templateUrl: './capitaes.component.html',
  styleUrls: ['./capitaes.component.scss']
})
export class CapitaesComponent implements OnInit {

  capitaes?: Jogador[];
  loading = false;

  constructor(
    private modalService: NzModalService,
    private jogadorService: JogadorService) {
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.jogadorService.capitaes().subscribe({
      next: (capitaes) => this.capitaes = capitaes
    })
  }

  gerarSenhaAcesso(capitao: Jogador): void {
    this.modalService.confirm({
      nzTitle: `Deseja gerar uma senha de acesso para o jogador ${capitao.nome}?`,
      nzOnOk: () => this.gerarSenha(capitao)
    });
  }

  gerarSenha(capitao: Jogador) {
    this.loading = true;
    this.jogadorService.gerarSenha(capitao.steamId).subscribe({
      next: (senha) => {
        this.loading = false;
        this.exibirSenha(capitao, senha);
      },
      error: () => this.loading = false
    })
  }

  exibirSenha(capitao: Jogador, senha: SenhaJogador) {
    this.modalService.create({
      nzTitle: 'Senha de acesso',
      nzContent: SenhaCapitaoComponent,
      nzComponentParams: { capitao, senha }
    });
  }

  sortearCapitaes(): void {
    this.modalService.confirm({
      nzTitle: 'Deseja realmente sortear os capitães?',
      nzOnOk: () => {
        this.loading = true;
        this.jogadorService.sortearCapitaes().subscribe(_ => this.pesquisar());
      }
    });
  }
}
