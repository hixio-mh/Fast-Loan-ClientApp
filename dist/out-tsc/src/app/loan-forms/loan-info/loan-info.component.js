import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoanInfo } from 'src/app/shared/loan-info.model';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/shared/loan.service';
//declare var mySlider:any;
var LoanInfoComponent = /** @class */ (function () {
    function LoanInfoComponent(router, loanService) {
        this.router = router;
        this.loanService = loanService;
        this.loanTypes = ['Home Loan', 'Personal Loan', 'Car Loan', 'Education Loan'];
        this.loanTypeHasError = true;
        this.loanInfoModel = new LoanInfo('default', 0, 0);
    }
    LoanInfoComponent.prototype.validateLoanType = function (value) {
        if (value == 'default') {
            this.loanTypeHasError = true;
        }
        else {
            this.loanTypeHasError = false;
        }
    };
    LoanInfoComponent.prototype.onSubmit = function () {
        alert("Loan Info Coming..");
        console.log(this.loanInfoModel);
        localStorage.setItem("form1", JSON.stringify(this.loanInfoModel));
        this.router.navigate(['/form2']);
    };
    LoanInfoComponent.prototype.ngOnInit = function () {
        //new mySlider();  
        new calculator();
        //
    };
    LoanInfoComponent.prototype.logOut = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/signin']);
    };
    LoanInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-loan-info',
            templateUrl: './loan-info.component.html',
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [Router, LoanService])
    ], LoanInfoComponent);
    return LoanInfoComponent;
}());
export { LoanInfoComponent };
//# sourceMappingURL=loan-info.component.js.map