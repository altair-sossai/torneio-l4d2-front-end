export enum StatusConfronto {
    Aguardando,
    Realizado,
    Cancelado
}

export const StatusConfrontos = [
    StatusConfronto.Aguardando,
    StatusConfronto.Realizado,
    StatusConfronto.Cancelado
];

export const StatusConfrontoLabel = new Map<number, string>([
    [StatusConfronto.Aguardando, 'Aguardando'],
    [StatusConfronto.Realizado, 'Realizado'],
    [StatusConfronto.Cancelado, 'Cancelado']
]);