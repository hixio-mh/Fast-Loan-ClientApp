import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './user-content/sign-in/sign-in.component';
import { SignUpComponent } from './user-content/sign-up/sign-up.component';
import { HomeComponent } from './user-content/home/home.component';
import { UserProfileComponent } from './user-content/user-profile/user-profile.component';
import { PersonalInfoComponent } from './loan-forms/personal-info/personal-info.component';
import { GranterInfoComponent } from './loan-forms/granter-info/granter-info.component';
import { LoanInfoComponent } from './loan-forms/loan-info/loan-info.component';
var routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'form1', component: LoanInfoComponent },
    { path: 'form2', component: PersonalInfoComponent },
    { path: 'form3', component: GranterInfoComponent },
    { path: '', redirectTo: '/signin', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map