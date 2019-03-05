import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  
  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/signin']);
  }


}
