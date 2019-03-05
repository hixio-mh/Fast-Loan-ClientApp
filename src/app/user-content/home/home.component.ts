import { User } from './../../shared/user.model';
import { decode } from '@angular/router/src/url_tree';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import * as jwt_decode from "jwt-decode";

declare var myScrol:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public user:boolean=false;
  constructor(private router: Router, private userService: UserService){
    
    new myScrol()
   }

  ngOnInit() {
   
    var token = localStorage.getItem('userToken');  
    var decoded = jwt_decode(token);
    var role = decoded.typ;
    if(role=="User")
    {
      this.user=true;
    }
   
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/signin']);
  }

}
