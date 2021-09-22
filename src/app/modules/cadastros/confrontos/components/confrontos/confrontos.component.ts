import { Component, OnInit } from '@angular/core';
import { Campanha } from '../../../campanhas/models/campanha';
import { CampanhaService } from '../../../campanhas/services/campanha.service';
import { Confronto } from '../../models/confronto';
import { ConfrontoService } from '../../services/confronto.service';

@Component({
  selector: 'app-confrontos',
  templateUrl: './confrontos.component.html',
  styleUrls: ['./confrontos.component.scss']
})
export class ConfrontosComponent implements OnInit {

  confrontos: Confronto[] = [];
  campanhas: Campanha[] = [];

  constructor(
    private confrontoService: ConfrontoService,
    private campanhaService: CampanhaService
  ) { }

  ngOnInit(): void {
    this.confrontoService.get().subscribe(confrontos => {
      this.confrontos = confrontos;
    });

    this.campanhaService.get().subscribe(campanhas => {
      this.campanhas = campanhas.reduce((previous, campanha) => ({ ...previous, [campanha.codigo]: campanha }), {}) as Campanha[];
    })
  }
}
