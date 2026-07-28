import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-admin-root',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AdminComponent {
  isCollapsed = false;

  sair(): void {
    localStorage.removeItem('auth-info');
  }
}
