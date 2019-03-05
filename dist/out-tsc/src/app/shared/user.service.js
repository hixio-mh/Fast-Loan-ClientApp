import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.rootUrl = 'https://localhost:44353/api/';
    }
    UserService.prototype.registerUser = function (user) {
        var body = {
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        };
        var reqHeader = new HttpHeaders({});
        return this.http.post(this.rootUrl + 'auth/register', body);
    };
    UserService.prototype.userAuthentication = function (userName, password) {
        var data = { "UserName": userName, "Password": password };
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
        return this.http.post(this.rootUrl + 'auth/login', data, { headers: reqHeader });
    };
    UserService.prototype.userProfile = function (loggedInUser) {
        alert(loggedInUser);
        return this.http.get(this.rootUrl + 'auth/getProfile?name=' + loggedInUser);
    };
    UserService.prototype.updateProfile = function (user) {
        var token = localStorage.getItem('userToken');
        var decoded = jwt_decode(token);
        var name = decoded.sub;
        var body = {
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        };
        var reqHeader = new HttpHeaders({});
        return this.http.put(this.rootUrl + 'auth/updateProfile?name=' + name, body);
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map