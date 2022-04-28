import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CapitaoService } from '../../cadastros/jogadores/services/capitao.service';

@Injectable()
export class CapitaoGuard implements CanActivate {

    constructor(
        private capitaoService: CapitaoService,
        private router: Router) { }

    canActivate() {
        if (!this.capitaoService.autenticado()) {
            this.router.navigate(['/capitao/login']);
            return false;
        }

        return true;
    }
}
