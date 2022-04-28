export class Capitao {
    public steamId?: string;
    public senha?: string;

    public get token(): string {
        return btoa(`${this.steamId}:${this.senha}`);
    }

    public logIn(): void {
        const json = JSON.stringify(this);

        localStorage.setItem('capitao-info', json);
    }

    public logOff(): void {
        localStorage.removeItem('capitao-info');
    }
}
