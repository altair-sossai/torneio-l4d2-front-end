import { Pipe, PipeTransform } from '@angular/core';
import { RespostaTime, RespostaTimeLabel } from '../enums/resposta-time.enum';

@Pipe({
  name: 'respostaTime'
})
export class RespostaTimePipe implements PipeTransform {
  transform(respostaTime: RespostaTime): string {
    return RespostaTimeLabel.get(respostaTime) || respostaTime.toString();
  }
}
