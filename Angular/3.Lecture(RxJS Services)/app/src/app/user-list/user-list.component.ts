import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  isLoading = true;
  users!: any[];
  
  
  ngOnInit(): void {
    this.userService.loadUsers().subscribe(users =>{
      this.isLoading = false;
      this.users = users})
  }

}
