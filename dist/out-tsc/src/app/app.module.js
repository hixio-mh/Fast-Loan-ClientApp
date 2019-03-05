import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './user-content/sign-in/sign-in.component';
import { SignUpComponent } from './user-content/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import { HomeComponent } from './user-content/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UserProfileComponent } from './user-content/user-profile/user-profile.component';
import { PersonalInfoComponent } from './loan-forms/personal-info/personal-info.component';
import { GranterInfoComponent } from './loan-forms/granter-info/granter-info.component';
import { LoanInfoComponent } from './loan-forms/loan-info/loan-info.component';
import { LoanService } from './shared/loan.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                SignInComponent,
                SignUpComponent,
                HomeComponent,
                UserProfileComponent,
                PersonalInfoComponent,
                GranterInfoComponent,
                LoanInfoComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                FormsModule,
                HttpClientModule,
                ToastrModule.forRoot(),
                RouterModule,
                AppRoutingModule
            ],
            providers: [UserService, LoanService, AuthGuard],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map