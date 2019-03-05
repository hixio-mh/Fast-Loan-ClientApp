import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './user-content/sign-in/sign-in.component';
import { SignUpComponent } from './user-content/sign-up/sign-up.component';
import { HomeComponent } from './user-content/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UserProfileComponent } from './user-content/user-profile/user-profile.component';
import { PersonalInfoComponent } from './loan-forms/personal-info/personal-info.component';
import { GranterInfoComponent } from './loan-forms/granter-info/granter-info.component';
import { LoanInfoComponent } from './loan-forms/loan-info/loan-info.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { DashboardComponent } from './admin-content/dashboard/dashboard.component';
import { LoanApplicationComponent } from './admin-content/loan-application/loan-application.component';
import { LoanApplicationDetailsComponent } from './admin-content/loan-application/loan-application-details/loan-application-details.component';
import { EmployeeComponent } from './admin-content/employee/employee.component';
import { UserComponent } from './admin-content/user/user.component';
import { LoanApproveComponent } from './admin-content/loan-approve/loan-approve.component';
import { LoansComponent } from './admin-content/loans/loans.component';
import { LoanDetailComponent } from './admin-content/loan-detail/loan-detail.component';
import { CollectionsComponent } from './admin-content/collections/collections.component';
import { GrantersComponent } from './admin-content/granters/granters.component';
import { BorrowersComponent } from './admin-content/borrowers/borrowers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminContentComponent,canActivate:[AuthGuard],
  children: [
    {
    path:  'dashboard',
    component:  DashboardComponent
    },
    {
      path:  'loans',
      component: LoansComponent
    },

    {
      path:  'loan-detail',
      component: LoanDetailComponent
    },
    {
      path:  'loan-application',
      component:  LoanApplicationComponent
    },
    {
      path:  'loan-approve',
      component:  LoanApproveComponent
    },
    {
      path:  'borrowers',
      component: BorrowersComponent
    },
    {
      path:  'granters',
      component: GrantersComponent
    },
    {
      path:  'collections',
      component: CollectionsComponent
    },
    {
      path:  'employee',
      component:  EmployeeComponent
    },
    {
      path:  'user',
      component:  UserComponent
    },
    {
      path:  'loan-application-details/:id',
      component:  LoanApplicationDetailsComponent
      },
    {path: '',redirectTo: '/admin/dashboard',pathMatch: 'full'}
  ]},
  
  {path:'profile',component:UserProfileComponent,canActivate:[AuthGuard]},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'form1',component:LoanInfoComponent,canActivate:[AuthGuard]},
  {path:'form2',component:PersonalInfoComponent,canActivate:[AuthGuard]},
  {path:'form3',component:GranterInfoComponent,canActivate:[AuthGuard]},
  {path: '',redirectTo: '/signin',pathMatch: 'full'},
  {path:"**",component:PageNotFoundComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
