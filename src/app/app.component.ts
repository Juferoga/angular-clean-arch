import { Component } from '@angular/core';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { UserLayoutComponent } from './features/users/user-layout/user-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserLayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
