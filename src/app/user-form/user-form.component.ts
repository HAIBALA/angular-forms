import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { mergeMap, switchMap } from 'rxjs/operators';
import { User } from '../../../user';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userNameControl: FormControl = new FormControl();
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userNameControl.valueChanges
      .pipe(switchMap((value) => this.userService.getUsers(value)))
      .subscribe((users) => (this.users = users));
  }
}
