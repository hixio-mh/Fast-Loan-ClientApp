import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isLoginError = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.OnSubmit = function (userName, password) {
        var _this = this;
        this.userService.userAuthentication(userName, password).subscribe(function (data) {
            localStorage.setItem('userToken', data.token);
            _this.router.navigate(['/home']);
        }, function (err) {
            _this.isLoginError = true;
        });
    };
    SignInComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            Router])
    ], SignInComponent);
    return SignInComponent;
}());
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map