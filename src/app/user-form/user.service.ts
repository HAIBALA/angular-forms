import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../user';

@Injectable()
export class UserService {
  userUrl = 'https://gorest.co.in/public/v2/users';
  constructor(private httpCLient: HttpClient) {}

  /**
   * get users by name
   */
  getUsers(name: String): Observable<User[]> {
    return this.httpCLient.get<User[]>(this.userUrl + `$?name{name}`);
  }
}
