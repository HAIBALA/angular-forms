import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly userApi = 'https://gorest.co.in/public/v2/users';

  constructor(private httpClient: HttpClient) {}

  public getUsers(name: string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userApi + `?name=${name}`);
  }
}
