import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/shared/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  constructor(private loanService: LoanService,private router: Router) { }
  loanList:any
  status=['Running','Completed','Pending']

  ngOnInit() {
    this.getLoansList()
  }

  getLoansList()
  {
    this.loanService.getAllLoans()
    .subscribe(res=>{
      alert("Loans List is loading..");
      this.loanList=res;
      console.log(this.loanList);
      
    },
    error=>{alert('Error Has Occured.')}
    )

  }

  detail(item)
  {
    // console.log(item);#
    localStorage.setItem('loandetails',JSON.stringify(item));
    this.router.navigate(['admin/loan-detail']);

  }

  delete(item)
  {
    var id = item.loanId;
    this.loanService.deleteLoan(id)
    .subscribe(res=>{
      alert("Loan Successfully Deleted..");
      this.getLoansList()
            
    },
    error=>{alert('Error Has Occured.')}
    )
    

  }

}
