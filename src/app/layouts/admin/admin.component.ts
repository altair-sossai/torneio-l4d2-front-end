import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isCollapsed = false;

  sair(): void {
    localStorage.removeItem('auth-info');
  }
}
