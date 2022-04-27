import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CurrentUserService } from '../current-user/services/current-user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private currentUserService: CurrentUserService) { }

    canActivate() {
        const currentUser = this.currentUserService.currentUser();

        if (currentUser == null) {
            this.router.navigate(['/auth']);
            return false;
        }

        return true;
    }
}
