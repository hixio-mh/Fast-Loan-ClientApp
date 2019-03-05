import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoanService } from 'src/app/shared/loan.service';
import * as jwt_decode from "jwt-decode";


@Component({
  selector: 'app-loan-application-details',
  templateUrl: './loan-application-details.component.html',
  styleUrls: ['./loan-application-details.component.css']
})
export class LoanApplicationDetailsComponent implements OnInit {
  public loanApplicationId;
  public applications:any;
  public admin=false;
  constructor(private _route:Router, private route:ActivatedRoute, private loanService:LoanService) { }

  ngOnInit() {
    var token = localStorage.getItem('userToken');  
    var decoded = jwt_decode(token);
    var role = decoded.typ;
    if(role=="Admin")
    {
      this.admin=true;
    }
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.loanApplicationId=id;
    alert("You selected Id " + this.loanApplicationId);
    this.applications=JSON.parse(localStorage.getItem("applications"));
   
  }

  delete()
  {
    this.loanService.deleteApplication(this.loanApplicationId)
    .subscribe(res=>{
      alert("Successfully Deleted Item");
      this._route.navigate(['/admin/loan-application']);
    },
    error=>{
      alert("Error Occured.");
    })
  }

  approve()
  {
    var id= this.loanApplicationId;
    localStorage.setItem("loanApplicationIdForApprove",id);
    this._route.navigate(['/admin/loan-approve']);

  }



}
