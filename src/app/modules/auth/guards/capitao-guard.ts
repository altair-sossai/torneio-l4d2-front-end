import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticarJogadorCommand } from '../../cadastros/jogadores/commands/autenticar-jogador.command';

@Injectable()
export class CapitaoGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (!AutenticarJogadorCommand.autenticado()) {
            this.router.navigate(['/capitao/login']);
            return false;
        }

        return true;
    }
}
