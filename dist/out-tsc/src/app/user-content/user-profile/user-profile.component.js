import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import * as jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, toastr, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.userDetails = { firstName: '',
            lastName: '',
            email: '',
            userName: '',
            Password: '' };
        this.isDisabled = true;
        this.btnDisable = true;
        this.btnEnable = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    UserProfileComponent.prototype.logOut = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/signin']);
    };
    UserProfileComponent.prototype.getProfile = function () {
        var _this = this;
        var token = localStorage.getItem('userToken');
        var decoded = jwt_decode(token);
        this.loggedInUser = decoded.sub;
        this.userService.userProfile(this.loggedInUser).subscribe(function (res) {
            _this.userDetails = res;
            //  alert( this.userDetails);
            console.log(_this.userDetails);
        });
    };
    UserProfileComponent.prototype.edit = function () {
        this.btnEnable = true;
        this.isDisabled = false;
        this.btnDisable = false;
    };
    UserProfileComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        this.userService.updateProfile(form.value)
            .subscribe(function (res) {
            {
                alert('You have Successfully Updateed your profile');
            }
            _this.router.navigate(['/profile']);
        }, function (error) { alert('Some Error Occured'); });
        this.isDisabled = true;
        this.btnDisable = true;
        this.btnEnable = false;
    };
    UserProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, ToastrService,
            Router])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map