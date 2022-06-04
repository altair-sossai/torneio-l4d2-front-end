import { Component, Input } from '@angular/core';
import { RespostaTime } from '../../enums/resposta-time.enum';

@Component({
  selector: 'app-resposta-time-icon',
  templateUrl: './resposta-time-icon.component.html',
  styleUrls: ['./resposta-time-icon.component.scss']
})
export class RespostaTimeIconComponent {
  RespostaTime = RespostaTime;

  @Input() respostaTime!: RespostaTime;
}
