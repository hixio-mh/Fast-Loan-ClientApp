import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/shared/loan.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  applications:any;

  constructor(private loanService: LoanService,private router: Router) { }

  ngOnInit(){
    
    this.loadApplication();   
  }

  loadApplication()
  {
    this.loanService.getApplications()
    
    .subscribe(res=>{
      alert("Applications are loading..");
      this.applications=res;
      console.log(this.applications);
      localStorage.setItem('applications',JSON.stringify(this.applications));

    },
    error=>{alert('Error Has Occured.')}
    )
    
  }

  onSelect(item)
  {
    this.router.navigate(['/admin/loan-application-details',item.loanApplicationId]);
    
  }

  

}
