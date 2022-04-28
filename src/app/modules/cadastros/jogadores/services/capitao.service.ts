import { Injectable } from '@angular/core';
import { Capitao } from '../models/capitao';

@Injectable({
    providedIn: 'root'
})
export class CapitaoService {
    autenticado(): boolean {
        return !!localStorage.getItem('capitao-info');
    }

    current(): Capitao | null {
        if (!this.autenticado())
            return null;

        const json = JSON.parse(localStorage.getItem('capitao-info')!);
        const capitao = new Capitao();

        capitao.steamId = json.steamId;
        capitao.senha = json.senha;

        return capitao;
    }
}
