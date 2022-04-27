import { Component } from '@angular/core';
import { AutenticarJogadorCommand } from 'src/app/modules/cadastros/jogadores/commands/autenticar-jogador.command';

@Component({
  selector: 'app-public-root',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  capitao = AutenticarJogadorCommand.autenticado();
}
