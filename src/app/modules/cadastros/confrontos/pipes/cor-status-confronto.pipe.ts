import { Pipe, PipeTransform } from '@angular/core';
import { StatusConfronto } from '../enums/status-confronto';

@Pipe({
  name: 'corStatusConfronto'
})
export class CorStatusConfrontoPipe implements PipeTransform {

  transform(statusConfronto: StatusConfronto): string {
    switch (statusConfronto) {
      case StatusConfronto.Aguardando: return 'blue';
      case StatusConfronto.Realizado: return 'green';
      case StatusConfronto.Cancelado: return 'red';
      default: return 'blue';
    }
  }
}
