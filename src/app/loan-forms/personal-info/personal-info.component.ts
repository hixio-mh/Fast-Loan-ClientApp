import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/shared/loan.service';
import { PersonalInfo } from 'src/app/shared/personal-info.model';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

genderTypes=['Male','Female','Other'];
genderHasError=true;
public user:boolean=false;
verificationTypes=['NID','Passport','Driving Licence','Trade Licence'];
verificationHasError=true;
// persoanlInfoModel1:PersonalInfo={
//   FirstName:'Rakibul',
//   LastName:'Islam',
//   FathersName:'Sharif',
//   MothersName:'Asma',
//   PresentAddress:'Muradpur',
//   PermanentAddress:'Muradpur',
//   City:'Dhaka',
//   State:'Dhaka',
//   ZipCode:'1204',
//   Country:'Bangladesh',
//   Nationality:'Bangladeshi',
//   Occupation:'Bussiness',
//   DateOfBirth:Date.now,
  

// }

persoanlInfoModel = new PersonalInfo('Rakibul','Islam','Sharif','Asma','Muradpur','Muradpur',
'Dhaka','Dhaka','1204','Bangladesh','Bangladeshi','Business',new Date(),'default','Islam','01682503355',
'soyon@gmail.com','default','123456');

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
  // alert("Personal Info Coming..");
   console.log(this.persoanlInfoModel);
   localStorage.setItem("form2",JSON.stringify(this.persoanlInfoModel));
   this.router.navigate(['/form3']);
}
  
  
  
  
  
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



 
  
  
  logOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/signin']);
  }

}
