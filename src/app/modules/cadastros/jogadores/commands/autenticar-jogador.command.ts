export class AutenticarJogadorCommand {
    public steamId?: string;
    public senha?: string;

    public logIn(): void {
        const token = btoa(`${this.steamId}:${this.senha}`);

        localStorage.setItem('capitao-info', token);
    }

    public logOff(): void {
        localStorage.removeItem('capitao-info');
    }
}
