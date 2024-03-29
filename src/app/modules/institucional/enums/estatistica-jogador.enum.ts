export enum EstatisticaJogador {
    Died = 'died',
    Incaps = 'incaps',
    DmgTaken = 'dmgTaken',
    Common = 'common',
    SiKilled = 'siKilled',
    SiDamage = 'siDamage',
    TankDamage = 'tankDamage',
    RockEats = 'rockEats',
    WitchDamage = 'witchDamage',
    Skeets = 'skeets',
    Levels = 'levels',
    Crowns = 'crowns',
    FfGiven = 'ffGiven',
    DmgTotal = 'dmgTotal',
    DmgTank = 'dmgTank',
    DmgSpit = 'dmgSpit',
    HunterDpDmg = 'hunterDpDmg',
    MvpSiDamage = 'mvpSiDamage',
    MvpCommon = 'mvpCommon',
    LvpFfGiven = 'lvpFfGiven'
}

export const EstatisticasJogadores = [
    EstatisticaJogador.Died,
    EstatisticaJogador.Incaps,
    EstatisticaJogador.DmgTaken,
    EstatisticaJogador.Common,
    EstatisticaJogador.SiKilled,
    EstatisticaJogador.SiDamage,
    EstatisticaJogador.TankDamage,
    EstatisticaJogador.RockEats,
    EstatisticaJogador.WitchDamage,
    EstatisticaJogador.Skeets,
    EstatisticaJogador.Levels,
    EstatisticaJogador.Crowns,
    EstatisticaJogador.FfGiven,
    EstatisticaJogador.DmgTotal,
    EstatisticaJogador.DmgTank,
    EstatisticaJogador.DmgSpit,
    EstatisticaJogador.HunterDpDmg,
    EstatisticaJogador.MvpSiDamage,
    EstatisticaJogador.MvpCommon,
    EstatisticaJogador.LvpFfGiven
];

export const EstatisticaJogadorLabel = new Map<string, string>([
    [EstatisticaJogador.Died, 'Mortes'],
    [EstatisticaJogador.Incaps, 'Vezes incapacitado'],
    [EstatisticaJogador.DmgTaken, 'Dano recebido'],
    [EstatisticaJogador.Common, 'Commons - Mortos'],
    [EstatisticaJogador.SiKilled, 'Infectados Especiais - Mortos'],
    [EstatisticaJogador.SiDamage, 'Infectados Especiais - Dano causado'],
    [EstatisticaJogador.TankDamage, 'Tank - Dano causado'],
    [EstatisticaJogador.RockEats, 'Tank - Pedras tomadas'],
    [EstatisticaJogador.WitchDamage, 'Witch - Dano causado'],
    [EstatisticaJogador.Skeets, 'Skeets'],
    [EstatisticaJogador.Levels, 'Levels'],
    [EstatisticaJogador.Crowns, 'Crowns (Matar a Witch com 1 disparo)'],
    [EstatisticaJogador.FfGiven, 'Fire-friend dado (FFG)'],
    [EstatisticaJogador.DmgTotal, 'Dano total'],
    [EstatisticaJogador.DmgTank, 'Tank - Dano causado'],
    [EstatisticaJogador.DmgSpit, 'Dano - Spitter'],
    [EstatisticaJogador.HunterDpDmg, 'Hunter - Dano por pounces'],
    [EstatisticaJogador.MvpSiDamage, 'MVP (SI)'],
    [EstatisticaJogador.MvpCommon, 'MVP (Common)'],
    [EstatisticaJogador.LvpFfGiven, 'LVP (FF)']
]);