import { Pipe, PipeTransform } from '@angular/core';
import { StatusConfronto, StatusConfrontoLabel } from '../enums/status-confronto';

@Pipe({
    name: 'statusConfronto',
    standalone: false
})
export class StatusConfrontoPipe implements PipeTransform {

  transform(statusConfronto: StatusConfronto): string {
    return StatusConfrontoLabel.get(statusConfronto) || statusConfronto.toString();
  }

}
