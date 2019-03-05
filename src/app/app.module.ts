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
import { AdminContentComponent } from './admin-content/admin-content.component';
import { DashboardComponent } from './admin-content/dashboard/dashboard.component';
import { LoanApplicationComponent } from './admin-content/loan-application/loan-application.component';
import { LoanApplicationDetailsComponent } from './admin-content/loan-application/loan-application-details/loan-application-details.component';
import { EmployeeComponent } from './admin-content/employee/employee.component';
import { UserComponent } from './admin-content/user/user.component';
import { LoanApproveComponent } from './admin-content/loan-approve/loan-approve.component';
import { LoansComponent } from './admin-content/loans/loans.component';
import { LoanDetailComponent } from './admin-content/loan-detail/loan-detail.component';
import { BorrowersComponent } from './admin-content/borrowers/borrowers.component';
import { GrantersComponent } from './admin-content/granters/granters.component';
import { CollectionsComponent } from './admin-content/collections/collections.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    UserProfileComponent,
    PersonalInfoComponent,
    GranterInfoComponent,
    LoanInfoComponent,
    AdminContentComponent,
    DashboardComponent,
    LoanApplicationComponent,
    LoanApplicationDetailsComponent,
    EmployeeComponent,
    UserComponent,
    LoanApproveComponent,
    LoansComponent,
    LoanDetailComponent,
    BorrowersComponent,
    GrantersComponent,
    CollectionsComponent,
    PageNotFoundComponent
 

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
  providers: [UserService,LoanService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
