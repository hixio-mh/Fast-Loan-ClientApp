import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoanService } from 'src/app/shared/loan.service';
import { Approval } from 'src/app/shared/approval.model';


@Component({
  selector: 'app-loan-approve',
  templateUrl: './loan-approve.component.html',
  styleUrls: ['./loan-approve.component.css']
})
export class LoanApproveComponent implements OnInit {


  public loanApprover:any;
  public loanOperators:any;
  public userList: any;
  
  public approvalModel={
    operateBy:'default',
    approveBy:'default',
    status:'default',
    issueDate:Date.now
  }
  public statusArray=["Approved","Pending"];

  operatorHasError=true;
  approvarHasError=true;
  statusHasError=true;



  
  onSubmit()
  {

  // alert("Approval Info Coming..");
  console.log(this.approvalModel);
  var data =this.approvalModel;
  var applicationId=localStorage.getItem("loanApplicationIdForApprove");
  this.loanService.loanApprove(applicationId,data)
  .subscribe(res=>{
    alert("Successfully Loan Approved");
    this.router.navigate(['admin/loan-application']);

  },
  error=>{
    alert("Error Occured");
  });
  
  }

validate(value)
{
  if(value=="default")
  {
    this.operatorHasError=true;
    
  }
  else{
    this.operatorHasError=false;
  }

}
validate1(value)
{
  if(value=="default")
  {
    
    this.approvarHasError=true;
  }
  else{
    
    this.approvarHasError=false;
  }

}

validate2(value)
{
  if(value=="default")
  {
    
    this.statusHasError=true;
  }
  else{
    
    this.statusHasError=false;
  }

}





  
  
  constructor(private userService: UserService,private loanService: LoanService,private router: Router) { }

  ngOnInit() {
    this.getOperators();
    this.getApprovers();
    
  }


  getOperators()
  {
    this.userService.geManagers()
    .subscribe(res=>{    
      this.loanOperators=res; 
      console.log( this.loanOperators)
    })

  }

  getApprovers()
  {
    this.userService.getAdmins()
    .subscribe(res=>{    
      this.loanApprover=res; 
      console.log( this.loanApprover)
    })

  }

}
