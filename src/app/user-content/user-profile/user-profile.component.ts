import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import * as jwt_decode from "jwt-decode";
import { User } from 'src/app/shared/user.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user1:boolean=false;
  loggedInUser:any;
  userDetails:any={firstName:'',
                  lastName:'',
                  email:'',
                  userName:'',
                  Password:''};
  isDisabled=true;
  btnDisable=true;
  btnEnable=false;
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService: UserService, private toastr: ToastrService,private router: 
    Router) { }

  ngOnInit() {
    var token = localStorage.getItem('userToken');  
    var decoded = jwt_decode(token);
    var role = decoded.typ;
    if(role=="User")
    {
      this.user1=true;
    }
    this.getProfile(); 
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/signin']);
  }

  getProfile()
  {
    var token = localStorage.getItem('userToken');  
    var decoded = jwt_decode(token);
    this.loggedInUser = decoded.sub;
    this.userService.userProfile(this.loggedInUser).subscribe((res:any)=>
    {
     this.userDetails= res;
      //  alert( this.userDetails);
        console.log( this.userDetails);
    });             
  }
  
  edit(){
    this.btnEnable=true;
    this.isDisabled=false;
    this.btnDisable=false;
  
  }

  OnSubmit(form: NgForm)
  {
    this.userService.updateProfile(form.value)
    .subscribe(res => {
      {
        alert('You have Successfully Updateed your profile')
      }
      this.router.navigate(['/profile']);
      
    },error=>{alert('Some Error Occured')}
    );
    
    this.isDisabled=true;
    this.btnDisable=true;
    this.btnEnable=false;
  }

}
    

