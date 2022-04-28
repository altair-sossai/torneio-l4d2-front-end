import { Component, OnInit } from '@angular/core';
import { CapitaoService } from 'src/app/modules/cadastros/jogadores/services/capitao.service';

@Component({
  selector: 'app-public-root',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  capitao = false;

  constructor(private capitaoService: CapitaoService) {
  }

  ngOnInit(): void {
    this.capitao = this.capitaoService.autenticado();
  }
}
