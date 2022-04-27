export class AutenticarJogadorCommand {
    private static localStorageKey: string = 'capitao-info';

    public steamId?: string;
    public senha?: string;

    public logIn(): void {
        const token = btoa(`${this.steamId}:${this.senha}`);

        localStorage.setItem(AutenticarJogadorCommand.localStorageKey, token);
    }

    public logOff(): void {
        localStorage.removeItem(AutenticarJogadorCommand.localStorageKey);
    }

    public static autenticado(): boolean {
        return !!localStorage.getItem(AutenticarJogadorCommand.localStorageKey);
    }
}
