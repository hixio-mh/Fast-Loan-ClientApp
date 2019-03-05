import { Component, OnInit } from '@angular/core';
import { LoanInfo } from 'src/app/shared/loan-info.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoanService } from 'src/app/shared/loan.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as jwt_decode from "jwt-decode";

declare var calculator:any;
//declare var mySlider:any;


@Component({
  selector: 'app-loan-info',
  templateUrl: './loan-info.component.html',
  styleUrls: []
})
export class LoanInfoComponent implements OnInit {
loanTypes=['Home Loan','Personal Loan','Car Loan','Education Loan'];
loanTypeHasError=true;
public user:boolean=false;

loanInfoModel = new LoanInfo('default',0,0);

validateLoanType(value)
{
  if(value=='default')
  {
    this.loanTypeHasError=true;
  }
  else{
    this.loanTypeHasError=false;
  }

} 


onSubmit()
{
  // alert("Loan Info Coming..");
  console.log(this.loanInfoModel);
  localStorage.setItem("form1",JSON.stringify(this.loanInfoModel));
  this.router.navigate(['/form2']);
}


constructor(private router: Router,private loanService: LoanService,) 
    {
      
    }

  ngOnInit() { 
    var token = localStorage.getItem('userToken');  
    var decoded = jwt_decode(token);
    var role = decoded.typ;
    if(role=="User")
    {
      this.user=true;
    }
  //new mySlider();  
  new calculator();
  
  //
  
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/signin']);
  }

}
