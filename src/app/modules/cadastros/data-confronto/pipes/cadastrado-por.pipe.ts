import { Pipe, PipeTransform } from '@angular/core';
import { CadastradoPor, CadastradoPorLabel } from '../enums/cadastrado-por.enum';

@Pipe({
  name: 'cadastradoPor'
})
export class CadastradoPorPipe implements PipeTransform {
  transform(cadastradoPor: CadastradoPor): string {
    return CadastradoPorLabel.get(cadastradoPor) || cadastradoPor.toString();
  }
}
