import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../user';

@Injectable()
export class UserServiceService {
  userUrl = 'https://gorest.co.in/public/v2/users';
  constructor(private httpCLient: HttpClient) {}

  getUsers(string name): Observable<User[]> {
    return this.httpCLient.get<User[]>(this.userUrl + `$?name={name}`);
  }
}
