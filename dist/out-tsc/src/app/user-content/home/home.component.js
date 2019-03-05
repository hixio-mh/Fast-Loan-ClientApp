import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        new myScrol();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logOut = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/signin']);
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, UserService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map