import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/shared/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
paymentModel=
{
  loanId:0,
  installmentId:0,
  paymentDate:Date.now,
  emi:0,
  penalty:0,
  reason:""
};
  constructor(private loanService: LoanService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.paymentModel);
    this.loanService.loanPayment(this.paymentModel)
    .subscribe(res=>{
      alert("Successfully Submitted...");
      this.router.navigate(['admin/loans']);
            
    },
    error=>{alert('Error Has Occured.')}
    )

  }
}
