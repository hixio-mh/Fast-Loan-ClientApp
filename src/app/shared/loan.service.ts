import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplyLoanViewModel } from './view-models/apply-loan-view-model';
import { LoanInfo } from './loan-info.model';
import { PersonalInfo } from './personal-info.model';
import { GranterInfo } from './granter-info.model';
import { LoanApproveComponent } from '../admin-content/loan-approve/loan-approve.component';
import { rootRoute } from '@angular/router/src/router_module';
import { Approval } from './approval.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
 
  readonly rootUrl = 'https://localhost:44353/api/';
  constructor(private http: HttpClient) { }

applyForLoan(loanInfo:any,personalInfo:any,granterInfo:any)
{
  var submittedLoanInfo:LoanInfo={
    LoanType:loanInfo.LoanType,
    LoanAmount:loanInfo.LoanAmount,
    Installments:loanInfo.Installments
  }

  var submittedPersonalInfo:PersonalInfo={
    FirstName:personalInfo.FirstName,
    LastName:personalInfo.LastName,
    FathersName:personalInfo.FathersName,
    MothersName:personalInfo.MothersName,
    PresentAddress:personalInfo.PresentAddress,
    PermanentAddress:personalInfo.PermanentAddress,
    City:personalInfo.City,
    State:personalInfo.State,
    ZipCode:personalInfo.ZipCode,
    Country:personalInfo.Country,
    Nationality:personalInfo.Nationality,
    Occupation:personalInfo.Occupation,
    DateOfBirth:personalInfo.DateOfBirth,
    Gender:personalInfo.Gender,
    Religion:personalInfo.Religion,
    MobileNo:personalInfo.MobileNo,
    Email:personalInfo.Email,
    VerificationIdType:personalInfo.VerificationIdType,
    VerificationIdNo:personalInfo.VerificationIdNo,
  }

  var submittedGranterInfo:GranterInfo={
    FirstName:granterInfo.FirstName,
    LastName:granterInfo.LastName,
    FathersName:granterInfo.FathersName,
    MothersName:granterInfo.MothersName,
    PresentAddress:granterInfo.PresentAddress,
    PermanentAddress:granterInfo.PermanentAddress,
    City:granterInfo.City,
    State:granterInfo.State,
    ZipCode:granterInfo.ZipCode,
    Country:granterInfo.Country,
    Nationality:granterInfo.Nationality,
    Occupation:granterInfo.Occupation,
    DateOfBirth:granterInfo.DateOfBirth,
    Gender:granterInfo.Gender,
    Religion:granterInfo.Religion,
    Relation:granterInfo.Relation,
    MobileNo:granterInfo.MobileNo,
    Email:granterInfo.Email,
    VerificationIdType:granterInfo.VerificationIdType,
    VerificationIdNo:granterInfo.VerificationIdNo,
  }
  
  const body:any=
  {
      submittedLoanInfo,
      submittedPersonalInfo,
      submittedGranterInfo,

  };

  return this.http.post(this.rootUrl + 'applicationForm/apply', body);

}

getApplications()
{
  return this.http.get(this.rootUrl + 'applicationForm/getApplications');

}

deleteApplication(id)
{
  return this.http.delete(this.rootUrl + 'applicationForm/deleteApplication?id='+ id);
}

loanApprove(applicationId,data)
{
  const body: Approval = {
    OperateBy:data.operateBy,
    ApproveBy:data.approveBy,
    Status:data.status,
    IssueDate:data.issueDate,
    ApplicationId:applicationId

  }
  let reqHeader = new HttpHeaders({'Content-Type': 'application/json','No-Auth':'True'});

  return this.http.post(this.rootUrl +'loans/approve', body,{ headers: reqHeader });
}

getAllLoans()
{
  return this.http.get(this.rootUrl + 'loans/getAllLoans');
}

loanPayment(data)
{
  return this.http.post(this.rootUrl +'loans/payment', data);
}

deleteLoan(id)
{
  return this.http.delete(this.rootUrl + 'loans/deleteLoan?id='+ id);
}

}




