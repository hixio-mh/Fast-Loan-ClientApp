import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { from } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { decode } from '@angular/router/src/url_tree';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'https://localhost:44353/api/';
  constructor(private http: HttpClient) { }
  
  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({});
    return this.http.post(this.rootUrl + 'auth/register', body);
  }

  userAuthentication(userName, password) 
  {
    var data ={"UserName":userName,"Password":password}
    let reqHeader = new HttpHeaders({'Content-Type': 'application/json','No-Auth':'True'});
    return this.http.post(this.rootUrl + 'auth/login', data, { headers: reqHeader });
  }

  userProfile(loggedInUser)
  {
    alert(loggedInUser);

    return this.http.get(this.rootUrl + 'auth/getProfile?name='+ loggedInUser);
  }

  updateProfile(user: User) {

    var token = localStorage.getItem('userToken');  
    var decoded = jwt_decode(token);
    var name = decoded.sub;
    
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({});
    return this.http.put(this.rootUrl + 'auth/updateProfile?name='+ name, body);

    
  }

  getUsers()
    {
      return this.http.get(this.rootUrl +'AppUser/users');
    }

    getEmployees()
    {
      return this.http.get(this.rootUrl +'AppUser/employees');
    }

    geManagers()
    {
      return this.http.get(this.rootUrl +'AppUser/managers');
    }

    getAdmins()
    {
      return this.http.get(this.rootUrl +'AppUser/admins');
    }

  deleteUser(id)
  {
    return this.http.delete(this.rootUrl +'AppUser/delete?id='+id);
  }

  
  addRole(role,id)
  {
    return this.http.get(this.rootUrl +'AppUser/changeRole?role='+role+ '&id='+id);
    
    
  }
  
 

}
