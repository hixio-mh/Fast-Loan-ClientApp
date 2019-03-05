import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, toastr, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        //alert =false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    SignUpComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.user = {
            FirstName: '',
            LastName: '',
            Email: '',
            UserName: '',
            Password: ''
        };
    };
    SignUpComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        this.userService.registerUser(form.value)
            .subscribe(function (res) {
            {
                _this.resetForm(form);
                //this.toastr.success('You have Successfully Registered');
                //this.alert=true;
                alert('You have Successfully Registered');
            }
            _this.router.navigate(['/signin']);
        }, function (error) { alert('User Name Already Exist.'); });
    };
    SignUpComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, ToastrService,
            Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map