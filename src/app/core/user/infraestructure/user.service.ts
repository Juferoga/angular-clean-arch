import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user-repository';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserRepository {
  apiBaseUrl = 'https://jsonplaceholder.typicode.com/users';

  private readonly _http = inject(HttpClient);

  constructor() { }

  getAll(): Observable<User[]> {
    return this._http.get<User[]>(this.apiBaseUrl);
  }

  getById(id: number): Observable<User[]> {
    return this._http.get<User[]>(`${this.apiBaseUrl}?id=${id}`);
  }
}
