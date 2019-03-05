import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/shared/loan.service';
import { PersonalInfo } from 'src/app/shared/personal-info.model';
var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent(router, loanService) {
        this.router = router;
        this.loanService = loanService;
        this.genderTypes = ['Male', 'Female', 'Other'];
        this.genderHasError = true;
        this.verificationTypes = ['NID', 'Passport', 'Driving Licence', 'Trade Licence'];
        this.verificationHasError = true;
        this.persoanlInfoModel = new PersonalInfo('Rakibul', 'Islam', 'Sharif', 'Asma', 'Muradpur', 'Muradpur', 'Dhaka', 'Dhaka', '1204', 'Bangladesh', 'Bangladeshi', 'Business', new Date(), 'default', 'Islam', '01682503355', 'soyon@gmail.com', 'default', '123456');
    }
    PersonalInfoComponent.prototype.validateGender = function (value) {
        if (value === 'default') {
            this.genderHasError = true;
        }
        else {
            this.genderHasError = false;
        }
    };
    PersonalInfoComponent.prototype.validateVerification = function (value) {
        if (value === 'default') {
            this.verificationHasError = true;
        }
        else {
            this.verificationHasError = false;
        }
    };
    PersonalInfoComponent.prototype.onSubmit = function () {
        alert("Personal Info Coming..");
        console.log(this.persoanlInfoModel);
        localStorage.setItem("form2", JSON.stringify(this.persoanlInfoModel));
        this.router.navigate(['/form3']);
    };
    PersonalInfoComponent.prototype.ngOnInit = function () {
    };
    PersonalInfoComponent.prototype.logOut = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/signin']);
    };
    PersonalInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-personal-info',
            templateUrl: './personal-info.component.html',
            styleUrls: ['./personal-info.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, LoanService])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());
export { PersonalInfoComponent };
//# sourceMappingURL=personal-info.component.js.map