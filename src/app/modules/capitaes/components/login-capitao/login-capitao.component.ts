import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AutenticarJogadorCommand } from 'src/app/modules/cadastros/jogadores/commands/autenticar-jogador.command';
import { JogadorService } from 'src/app/modules/cadastros/jogadores/services/jogador.service';

@Component({
  selector: 'app-login-capitao',
  templateUrl: './login-capitao.component.html',
  styleUrls: ['./login-capitao.component.scss']
})
export class LoginCapitaoComponent implements OnInit {

  command = new AutenticarJogadorCommand();
  errors: any;
  busy = false;

  constructor(
    private messageService: NzMessageService,
    private jogadorService: JogadorService,
    private router: Router) { }

  ngOnInit(): void {
    this.command.logOff();
  }

  login(): void {
    this.busy = true;

    this.jogadorService.verificarAutenticacao(this.command).subscribe((result) => {
      this.busy = false;

      if (!result.autenticado) {
        this.messageService.create('error', 'Ocorreu um erro ao tentar autenticar o jogador');
        return;
      }

      this.command.logIn();
      this.router.navigate(['/proximo-confronto']);
    }, result => {
      this.errors = result.error.errors;
      this.busy = false;
    });
  }

}
