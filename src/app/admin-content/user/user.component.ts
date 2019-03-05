import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userList:any;
  public admin=false;
  
 

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
    var token = localStorage.getItem('userToken');  
    var decoded = jwt_decode(token);
    var role = decoded.typ;
    if(role=="Admin")
    {
      this.admin=true;
    }
    this. getUserList();

  }

  getUserList()
  {
    this.userService.getUsers()
    .subscribe(res=>{
      alert("User List is loading..");
      this.userList=res;
      console.log(this.userList);
      
    },
    error=>{alert('Error Has Occured.')}
    )

  }

  delete(item)
  {
    var id = item.user.id;
    this.userService.deleteUser(id)
    .subscribe(res=>{
      {alert("Successfully User is Deleted .."); }  
      
      this.getUserList();
      
    },
    error=>{alert('Error Has Occured.')}
    )   

  }

  addRole(role,item)
  {
    var role =role;
    var id = item.user.id;
    this.userService.addRole(role,id)
    .subscribe(res=>{
      alert("Successfully Role is changed ..");
      this.getUserList();
    },
    error=>{alert('Error Has Occured.')})
  }

}
