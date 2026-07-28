import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CapitaoService } from '../../cadastros/jogadores/services/capitao.service';

@Injectable()
export class CapitaoGuard  {
    private capitaoService = inject(CapitaoService);
    private router = inject(Router);


    canActivate() {
        if (!this.capitaoService.autenticado()) {
            this.router.navigate(['/capitao/login']);
            return false;
        }

        return true;
    }
}
