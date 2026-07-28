import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-auth-root',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AuthComponent {
}
