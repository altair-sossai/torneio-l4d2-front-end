import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horario'
})
export class HorarioPipe implements PipeTransform {
  zeroPad(num: number, numZeros: number): string {
    var n = Math.abs(num);
    var zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
    var zeroString = Math.pow(10, zeros).toString().substr(1);
    if (num < 0) {
      zeroString = '-' + zeroString;
    }

    return zeroString + n;
  }

  transform(horario: any): string {
    return `${this.zeroPad(+horario.hora, 2)}:${this.zeroPad(+horario.minuto, 2)}`
  }
}
