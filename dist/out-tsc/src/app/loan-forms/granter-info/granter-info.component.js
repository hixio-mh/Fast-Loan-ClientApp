import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GranterInfo } from 'src/app/shared/granter-info.model';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/shared/loan.service';
var GranterInfoComponent = /** @class */ (function () {
    function GranterInfoComponent(router, loanService) {
        this.router = router;
        this.loanService = loanService;
        this.genderTypes = ['Male', 'Female', 'Other'];
        this.genderHasError = true;
        this.verificationTypes = ['NID', 'Passport', 'Driving Licence', 'Trade Licence'];
        this.verificationHasError = true;
        this.granterInfoModel = new GranterInfo('Rakibul', 'Islam', 'Sharif', 'Asma', 'Muradpur', 'Muradpur', 'Dhaka', 'Dhaka', '1204', 'Bangladesh', 'Bangladeshi', 'Business', new Date(), 'default', 'Islam', 'Brother', '01682503355', 'soyon@gmail.com', 'default', '123456');
    }
    GranterInfoComponent.prototype.ngOnInit = function () {
    };
    GranterInfoComponent.prototype.validateGender = function (value) {
        if (value === 'default') {
            this.genderHasError = true;
        }
        else {
            this.genderHasError = false;
        }
    };
    GranterInfoComponent.prototype.validateVerification = function (value) {
        if (value === 'default') {
            this.verificationHasError = true;
        }
        else {
            this.verificationHasError = false;
        }
    };
    GranterInfoComponent.prototype.onSubmit = function () {
        var _this = this;
        alert("Granter Info Coming..");
        //console.log(this.granterInfoModel);
        // localStorage.setItem("form3",JSON.stringify(this.granterInfoModel));
        // var loanInfo=JSON.parse(localStorage.getItem("form1"));
        // var personalInfo=JSON.parse(localStorage.getItem("form2"));
        // var granterInfo=JSON.parse(localStorage.getItem("form3"));
        var loanInfo = JSON.parse(localStorage.getItem("form1"));
        console.log(loanInfo);
        var personalInfo = JSON.parse(localStorage.getItem("form2"));
        console.log(personalInfo);
        var granterInfo = this.granterInfoModel;
        console.log(granterInfo);
        this.loanService.applyForLoan(loanInfo, personalInfo, granterInfo)
            .subscribe(function (res) {
            {
                alert("Successfully applyed for loan..");
            }
            _this.router.navigate(['/home']);
        }, function (error) { alert('Error Has Occured.'); });
    };
    GranterInfoComponent.prototype.logOut = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/signin']);
    };
    GranterInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-granter-info',
            templateUrl: './granter-info.component.html',
            styleUrls: ['./granter-info.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, LoanService])
    ], GranterInfoComponent);
    return GranterInfoComponent;
}());
export { GranterInfoComponent };
//# sourceMappingURL=granter-info.component.js.map