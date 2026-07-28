import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { ClipboardService } from 'ngx-clipboard';
import { Jogador } from '../../../jogadores/models/jogador';
import { SenhaJogador } from '../../../jogadores/models/senha-jogador';

@Component({
  selector: 'app-senha-capitao',
  templateUrl: './senha-capitao.component.html',
  styleUrls: ['./senha-capitao.component.scss']
})
export class SenhaCapitaoComponent {

  private readonly modalData = inject<{ capitao: Jogador; senha: SenhaJogador } | null>(NZ_MODAL_DATA, { optional: true });

  @Input() capitao = this.modalData?.capitao!;
  @Input() senha = this.modalData?.senha!;

  @ViewChild('texto') texto!: ElementRef;

  constructor(
    private modal: NzModalRef,
    private messageService: NzMessageService,
    private clipboardService: ClipboardService) { }

  close(): void {
    this.modal.destroy();
  }

  copiarTexto(): void {
    this.clipboardService.copy(this.texto.nativeElement.innerText);
    this.messageService.create('success', 'Mensagem copiada para o Ctrl+V');
  }
}
