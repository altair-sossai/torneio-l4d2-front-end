import { Component, OnInit } from '@angular/core';
import { Rodada } from '../../models/rodada';
import { ConfrontoService } from '../../services/confronto.service';

@Component({
  selector: 'app-confrontos',
  templateUrl: './confrontos.component.html',
  styleUrls: ['./confrontos.component.scss']
})
export class ConfrontosComponent implements OnInit {

  rodadas: Rodada[] = [];

  constructor(
    private confrontoService: ConfrontoService
  ) { }

  ngOnInit(): void {
    this.confrontoService.rodadas().subscribe(rodadas => {
      this.rodadas = rodadas;
    });
  }
}
