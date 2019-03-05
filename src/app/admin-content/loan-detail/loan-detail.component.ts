import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {
installmentList:any

  constructor() { }

  ngOnInit() {

    var i= JSON.parse(localStorage.getItem('loandetails'));
    this.installmentList=i.loanInstallments
    console.log(this.installmentList);
  }

}
