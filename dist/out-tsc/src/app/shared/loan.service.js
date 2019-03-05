import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LoanService = /** @class */ (function () {
    function LoanService(http) {
        this.http = http;
        this.rootUrl = 'https://localhost:44353/api/';
    }
    LoanService.prototype.applyForLoan = function (loanInfo, personalInfo, granterInfo) {
        var submittedLoanInfo = {
            LoanType: loanInfo.LoanType,
            LoanAmount: loanInfo.LoanAmount,
            Installments: loanInfo.Installments
        };
        var submittedPersonalInfo = {
            FirstName: personalInfo.FirstName,
            LastName: personalInfo.LastName,
            FathersName: personalInfo.FathersName,
            MothersName: personalInfo.MothersName,
            PresentAddress: personalInfo.PresentAddress,
            PermanentAddress: personalInfo.PermanentAddress,
            City: personalInfo.City,
            State: personalInfo.State,
            ZipCode: personalInfo.ZipCode,
            Country: personalInfo.Country,
            Nationality: personalInfo.Nationality,
            Occupation: personalInfo.Occupation,
            DateOfBirth: personalInfo.DateOfBirth,
            Gender: personalInfo.Gender,
            Religion: personalInfo.Religion,
            MobileNo: personalInfo.MobileNo,
            Email: personalInfo.Email,
            VerificationIdType: personalInfo.VerificationIdType,
            VerificationIdNo: personalInfo.VerificationIdNo,
        };
        var submittedGranterInfo = {
            FirstName: granterInfo.FirstName,
            LastName: granterInfo.LastName,
            FathersName: granterInfo.FathersName,
            MothersName: granterInfo.MothersName,
            PresentAddress: granterInfo.PresentAddress,
            PermanentAddress: granterInfo.PermanentAddress,
            City: granterInfo.City,
            State: granterInfo.State,
            ZipCode: granterInfo.ZipCode,
            Country: granterInfo.Country,
            Nationality: granterInfo.Nationality,
            Occupation: granterInfo.Occupation,
            DateOfBirth: granterInfo.DateOfBirth,
            Gender: granterInfo.Gender,
            Religion: granterInfo.Religion,
            Relation: granterInfo.Relation,
            MobileNo: granterInfo.MobileNo,
            Email: granterInfo.Email,
            VerificationIdType: granterInfo.VerificationIdType,
            VerificationIdNo: granterInfo.VerificationIdNo,
        };
        var body = {
            submittedLoanInfo: submittedLoanInfo,
            submittedPersonalInfo: submittedPersonalInfo,
            submittedGranterInfo: submittedGranterInfo,
        };
        // const body:ApplyLoanViewModel=
        // {
        //    loanInfo: submittedLoanInfo,
        //    personalInfo: submittedPersonalInfo,
        //    granterInfo: submittedGranterInfo,
        // };
        // let reqHeader = new HttpHeaders({'Content-Type': 'application/json','No-Auth':'True'}); ,{ headers: reqHeader }
        return this.http.post(this.rootUrl + 'applicationForm/apply', body);
    };
    LoanService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoanService);
    return LoanService;
}());
export { LoanService };
//# sourceMappingURL=loan.service.js.map