import { Component, OnInit, inject } from '@angular/core';
import { CapitaoService } from 'src/app/modules/cadastros/jogadores/services/capitao.service';

@Component({
    selector: 'app-public-root',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.scss'],
    standalone: false
})
export class PublicComponent implements OnInit {
  private capitaoService = inject(CapitaoService);


  capitao = false;

  ngOnInit(): void {
    this.capitao = this.capitaoService.autenticado();
  }
}
