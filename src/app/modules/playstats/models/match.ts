import { Team } from "./team";

export interface Match {
    teamSize: number;
    matchStart: string;
    matchEnd: string;
    matchElapsed: string;
    campaign: string;
    teams: Team[];
    statistics: string[];
    competitive: boolean;
}
