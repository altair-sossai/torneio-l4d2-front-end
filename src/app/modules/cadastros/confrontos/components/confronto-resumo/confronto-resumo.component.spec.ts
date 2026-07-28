import { Time } from '../../../times/models/time';
import { Confronto } from '../../models/confronto';
import { ConfrontoResumoComponent } from './confronto-resumo.component';

describe('ConfrontoResumoComponent', () => {
  it('deve exibir zero por cento quando a pontuação máxima ainda não estiver disponível', () => {
    const component = new ConfrontoResumoComponent();
    const time = { codigo: 'time-a' } as Time;

    component.confronto = {
      codigoTimeA: time.codigo,
      pontosConquistadosTimeA: 0,
      penalidadeTimeA: 0
    } as Confronto;

    expect(component.pontuacaoMaxima()).toBe(0);
    expect(component.progresso(time)).toBe(0);
    expect(component.formatar(Number.NaN)).toBe('0%');
  });
});
