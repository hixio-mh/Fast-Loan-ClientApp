import { Component, OnInit } from '@angular/core';
import { GranterInfo } from 'src/app/shared/granter-info.model';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/shared/loan.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-granter-info',
  templateUrl: './granter-info.component.html',
  styleUrls: ['./granter-info.component.css']
})
export class GranterInfoComponent implements OnInit {
  genderTypes=['Male','Female','Other'];
  genderHasError=true;
  public user:boolean=false;
  
  verificationTypes=['NID','Passport','Driving Licence','Trade Licence'];
  verificationHasError=true;

  // granterInfoModel = new GranterInfo('','','','','','',
  // '','','','','','',new Date(),'','','','',
  // '','default','');
  
  granterInfoModel = new GranterInfo('Rakibul','Islam','Sharif','Asma','Muradpur','Muradpur',
  'Dhaka','Dhaka','1204','Bangladesh','Bangladeshi','Business',new Date(),'default','Islam','Brother','01682503355',
  'soyon@gmail.com','default','123456');

  constructor(private router: Router,private loanService: LoanService) { }
  
    ngOnInit() {
      var token = localStorage.getItem('userToken');  
      var decoded = jwt_decode(token);
      var role = decoded.typ;
      if(role=="User")
      {
        this.user=true;
      }
    }
  
  
  validateGender(value)
  {
    if(value==='default')
    {
      this.genderHasError=true;
    }
    else{
      this.genderHasError=false;
    }
  
  }  
  
  validateVerification(value)
  {
    if(value==='default')
    {
      this.verificationHasError=true;
    }
    else{
      this.verificationHasError=false;
    }
  
  } 
    
    
  onSubmit()
  {
  // alert("Granter Info Coming..");

    var loanInfo=JSON.parse(localStorage.getItem("form1"));
    console.log(loanInfo); 

    var personalInfo=JSON.parse(localStorage.getItem("form2"));
    console.log(personalInfo); 

    var granterInfo=this.granterInfoModel;
    console.log(granterInfo); 
  
    this.loanService.applyForLoan(loanInfo,personalInfo,granterInfo)
    .subscribe(res => {
    {
      
      alert("Successfully applyed for loan..");
      // localStorage.removeItem("form1");
      // localStorage.removeItem("form2");
    
    }
    this.router.navigate(['/home']);
    
  },error=>{alert('Error Has Occured.')}
  );
  
  }
    
    logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/signin']);
  }

}
