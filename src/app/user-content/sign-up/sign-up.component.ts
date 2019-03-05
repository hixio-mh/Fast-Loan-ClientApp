import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  //alert =false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService: UserService, private toastr: ToastrService,private router: 
    Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    
      this.user = {
      FirstName: '',
      LastName: '',
      Email: '',
      UserName: '',
      Password: ''
    }
}

OnSubmit(form: NgForm) {
  this.userService.registerUser(form.value)
    .subscribe(res => {
      {
        this.resetForm(form);
        //this.toastr.success('You have Successfully Registered');
        //this.alert=true;
        alert('You have Successfully Registered')
      }
      this.router.navigate(['/signin']);
      
    },error=>{alert('User Name Already Exist.')}
    );
}
}
