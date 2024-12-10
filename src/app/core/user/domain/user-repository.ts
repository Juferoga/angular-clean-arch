import { Observable } from "rxjs";
import { User } from "./user";

export interface UserRepository {
  getAll(): Observable<User[]>;
  getById(id: number): Observable<User[]>;
}
