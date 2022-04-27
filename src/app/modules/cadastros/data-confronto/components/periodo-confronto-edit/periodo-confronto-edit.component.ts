import { Component, Input, OnInit } from '@angular/core';
import { PeriodoConfrontoCommand } from '../../commands/periodo-confronto.command';
import { PeriodoConfrontoService } from '../../services/periodo-confronto.service';

@Component({
  selector: 'app-periodo-confronto-edit',
  templateUrl: './periodo-confronto-edit.component.html',
  styleUrls: ['./periodo-confronto-edit.component.scss']
})
export class PeriodoConfrontoEditComponent implements OnInit {

  @Input() confrontoId: string | undefined;
  periodo?: PeriodoConfrontoCommand;

  constructor(private periodoConfrontoService: PeriodoConfrontoService) {
  }

  ngOnInit(): void {
    this.periodoConfrontoService.get(this.confrontoId!).subscribe({
      next: periodo => this.periodo = periodo,
      error: error => error.status == 404 ? this.novo() : this.error(error)
    })
  }

  novo(): void {
    this.periodo = new PeriodoConfrontoCommand();
  }

  error(erro: any): void {
    console.log(erro);
  }
}
