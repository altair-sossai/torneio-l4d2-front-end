import { Injectable } from '@angular/core';
import { Claim, PrettyToken } from '../../pretty-token/models/pretty-token';
import { CurrentUserModel } from '../models/current-user-model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private findClaim(type: string, claims: Claim[]): Claim | undefined {
    for (const claim of claims) {
      if (claim.type === type) {
        return claim;
      }
    }

    return undefined;
  }

  login(prettyToken: PrettyToken) {
    const userId = this.findClaim('userId', prettyToken.claims);
    const name = this.findClaim('name', prettyToken.claims);
    const email = this.findClaim('email', prettyToken.claims);

    const currentUser = new CurrentUserModel();
    currentUser.accessToken = prettyToken.accessToken;
    currentUser.userId = userId ? userId.value : undefined;
    currentUser.name = name ? name.value : undefined;
    currentUser.email = email ? email.value : undefined;

    const json = JSON.stringify(currentUser);

    localStorage.setItem('auth-info', json);
  }

  currentUser(): CurrentUserModel | undefined {
    const json = localStorage.getItem('auth-info');

    if (!json) {
      return;
    }

    return JSON.parse(json);
  }

  logout() {
    localStorage.removeItem('auth-info');
  }
}
