export enum RespostaTime {
    SemResposta,
    Aceitou,
    Recusou
}

export const RespostasTimes = [
    RespostaTime.SemResposta,
    RespostaTime.Aceitou,
    RespostaTime.Recusou
];

export const RespostaTimeLabel = new Map<number, string>([
    [RespostaTime.SemResposta, 'Sem resposta'],
    [RespostaTime.Aceitou, 'Aceitou'],
    [RespostaTime.Recusou, 'Recusou']
]);