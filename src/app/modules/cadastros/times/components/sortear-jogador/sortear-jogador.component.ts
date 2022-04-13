import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Jogador } from '../../../jogadores/models/jogador';
import { JogadorService } from '../../../jogadores/services/jogador.service';
import { TimeJogadorCommand } from '../../commands/time-jogador.command';
import { Time } from '../../models/time';
import { TimeService } from '../../services/time.service';

declare var $: any;

@Component({
  selector: 'app-sortear-jogador',
  templateUrl: './sortear-jogador.component.html',
  styleUrls: ['./sortear-jogador.component.scss']
})
export class SortearJogadorComponent implements OnInit {

  @ViewChild('audio') audio?: ElementRef;

  times?: Time[];
  time?: Time;

  jogadores?: Jogador[];
  jogador?: Jogador;

  timeSorteado = false;
  jogadorSorteado = false;
  busy = false;

  command = new TimeJogadorCommand();

  constructor(
    private modal: NzModalRef,
    private timeService: TimeService,
    private jogadorService: JogadorService) {
  }

  ngOnInit(): void {
    this.timeService.get().subscribe(times =>
      this.jogadorService.get().subscribe(jogadores =>
        this.realizarSorteio(times, jogadores)
      ));
  }

  realizarSorteio(times: Time[], jogadores: Jogador[]): void {
    this.times = this.timesComMenosJogadores(times);
    this.time = this.times[Math.floor(Math.random() * this.times.length)];

    this.jogadores = this.jogadoresSemTime(times, jogadores);
    this.jogador = this.jogadores[Math.floor(Math.random() * this.jogadores.length)];

    setTimeout(() => this.iniciarRoletas());
  }

  timesComMenosJogadores(times: Time[]): Time[] {
    let quantidade = Infinity;

    for (const time of times)
      quantidade = Math.min(quantidade, time.jogadores.length);

    return times.filter(time => time.jogadores.length == quantidade);
  }

  jogadoresSemTime(times: Time[], jogadores: Jogador[]): Jogador[] {
    var ignorar: any = {};

    for (const time of times) {
      for (const jogador of time.jogadores) {
        ignorar[jogador.steamId] = true;
      }
    }

    return jogadores.filter(jogador => !ignorar[jogador.steamId]);
  }

  iniciarRoletas() {
    this.iniciarRolateTimes();
    this.iniciarRolateJogadores();
  }

  iniciarRolateTimes() {
    const options = {
      speed: 10,
      duration: 3,
      stopImageNumber: this.times?.indexOf(this.time!),
      startCallback: () => this.command.time = this.time!.codigo,
      stopCallback: () => {
        this.timeSorteado = true;
        this.pausarAudio();
      },
    };

    $('#times-roulette').roulette(options);
  }

  iniciarRolateJogadores() {
    const options = {
      speed: 10,
      duration: 3,
      stopImageNumber: this.jogadores?.indexOf(this.jogador!),
      startCallback: () => this.command.jogador = this.jogador!.steamId,
      stopCallback: () => {
        this.jogadorSorteado = true;
        this.pausarAudio();
      },
    };

    $('#jogadores-roulette').roulette(options);
  }

  girarRolateTimes(): void {
    $('#times-roulette').roulette('start');
    this.playAudio();
  }

  girarRolateJogadores(): void {
    $('#jogadores-roulette').roulette('start');
    this.playAudio();
  }

  playAudio(): void {
    this.audio!.nativeElement.play();
  }

  pausarAudio(): void {
    if (this.timeSorteado && this.jogadorSorteado)
      this.audio!.nativeElement.pause();
  }

  salvar(): void {
    if (this.command == null)
      return;

    this.busy = true;
    this.timeService.vincular(this.command).subscribe(() => this.modal.triggerOk());
  }

  close(): void {
    this.modal.destroy();
  }
}
