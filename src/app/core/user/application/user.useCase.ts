import { Observable } from "rxjs";
import { User } from "../domain/user";
import { inject } from "@angular/core";
import { UserService } from "../infraestructure/user.service";

export class userCaseUse {
  userService = inject(UserService);

  getAll(): Observable<User[]>{
    return this.userService.getAll();
  }

  getById(id: number): Observable<User[]>{
    return this.userService.getById(id);
  }
}
