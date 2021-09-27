export class PrettyToken {
    public accessToken!: string;
    public claims!: Claim[];
}

export class Claim {
    public type!: string;
    public value!: string;
}
