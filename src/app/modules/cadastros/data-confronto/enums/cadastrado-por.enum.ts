export enum CadastradoPor {
    Administrador,
    TimeA,
    TimeB
}

export const CadastradosPor = [
    CadastradoPor.Administrador,
    CadastradoPor.TimeA,
    CadastradoPor.TimeB
];

export const CadastradoPorLabel = new Map<number, string>([
    [CadastradoPor.Administrador, 'Administrador'],
    [CadastradoPor.TimeA, 'Time A'],
    [CadastradoPor.TimeB, 'Time B']
]);