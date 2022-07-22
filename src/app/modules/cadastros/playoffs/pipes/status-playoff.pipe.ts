import { Pipe, PipeTransform } from '@angular/core';
import { StatusPlayoff, StatusPlayoffLabel } from '../enums/status-playoff';

@Pipe({
  name: 'statusPlayoff'
})
export class StatusPlayoffPipe implements PipeTransform {

  transform(statusPlayoff: StatusPlayoff): string {
    return StatusPlayoffLabel.get(statusPlayoff) || statusPlayoff.toString();
  }

}
