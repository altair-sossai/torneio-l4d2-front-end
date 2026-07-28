import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user/services/current-user.service';

@Injectable()
export class AuthGuard  {
    private router = inject(Router);
    private currentUserService = inject(CurrentUserService);


    canActivate() {
        const currentUser = this.currentUserService.currentUser();

        if (currentUser == null) {
            this.router.navigate(['/auth']);
            return false;
        }

        return true;
    }
}
