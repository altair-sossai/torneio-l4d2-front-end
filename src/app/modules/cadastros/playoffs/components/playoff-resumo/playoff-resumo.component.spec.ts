import { Time } from '../../../times/models/time';
import { Confronto, Playoff } from '../../models/playoff';
import { PlayoffResumoComponent } from './playoff-resumo.component';

describe('PlayoffResumoComponent', () => {
  it('deve exibir zero por cento quando a pontuação máxima ainda não estiver disponível', () => {
    const component = new PlayoffResumoComponent();
    const time = { codigo: 'time-a' } as Time;

    component.playoff = { codigoTimeA: time.codigo } as Playoff;
    component.confronto = {
      pontosConquistadosTimeA: 0,
      penalidadeTimeA: 0
    } as Confronto;

    expect(component.pontuacaoMaxima()).toBe(0);
    expect(component.progresso(time)).toBe(0);
    expect(component.formatar(Number.NaN)).toBe('0%');
  });
});
