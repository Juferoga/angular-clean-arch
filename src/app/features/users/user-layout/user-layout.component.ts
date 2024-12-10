import { Component, OnInit } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { userCaseUse } from '../../../core/user/application/user.useCase';
import { User } from '../../../core/user/domain/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    UserListComponent,
    UserDetailsComponent
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent implements OnInit {
  userUseCase = new userCaseUse();
  users: User[] = [];
  userSelected!: User;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userUseCase.getAll().subscribe(users => {
      this.users = users;
    });
  }

  getUserById(id: number) {
    this.userUseCase.getById(id).subscribe(user => {
      this.userSelected = user[0];
    });
  }
}
