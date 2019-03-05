import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/shared/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-granters',
  templateUrl: './granters.component.html',
  styleUrls: ['./granters.component.css']
})
export class GrantersComponent implements OnInit {

  constructor(private loanService: LoanService,private router: Router) { }
  granterList:any
  ngOnInit() {
    this.getGranterList()
  }

  getGranterList()
  {
    this.loanService.getAllLoans()
    .subscribe(res=>{
      alert("Granter List is loading..");
      this.granterList=res;
      console.log(this.granterList);
      
    },
    error=>{alert('Error Has Occured.')}
    )

  }
 

}
