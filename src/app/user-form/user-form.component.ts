import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
    this.userNameControl.valueChanges.subscribe((value) =>
      this.userService.getUsers(''+value).subscribe((users) => {
        this.users = users;
      })
    );
  }
}
