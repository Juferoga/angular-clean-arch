import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userCaseUse } from '../../../core/user/application/user.useCase';
import { User } from '../../../core/user/domain/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {

  @Input() users: User[] = [];
  @Output() userSelected = new EventEmitter<number>();

  constructor() {}

  onClick(user: User) {
    this.userSelected.emit(user.id);
  }
}
