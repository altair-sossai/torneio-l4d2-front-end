export enum StatusPlayoff {
    Aguardando,
    EmAndamento,
    Finalizado
}

export const StatusPlayoffs = [
    StatusPlayoff.Aguardando,
    StatusPlayoff.EmAndamento,
    StatusPlayoff.Finalizado
];

export const StatusPlayoffLabel = new Map<number, string>([
    [StatusPlayoff.Aguardando, 'Aguardando'],
    [StatusPlayoff.EmAndamento, 'Em andamento'],
    [StatusPlayoff.Finalizado, 'Finalizado']
]);