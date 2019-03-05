import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/shared/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.css']
})
export class BorrowersComponent implements OnInit {

  constructor(private loanService: LoanService,private router: Router) { }
  borrowerList:any
  ngOnInit() {
    this.getBorrowersList()
  }

  getBorrowersList()
  {
    this.loanService.getAllLoans()
    .subscribe(res=>{
      alert("Borrowers List is loading..");
      this.borrowerList=res;
      console.log(this.borrowerList);
      
    },
    error=>{alert('Error Has Occured.')}
    )

  }

}
