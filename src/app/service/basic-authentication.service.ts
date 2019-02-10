import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})


export class BasicAuthenticationService {
  constructor(
    private http:HttpClient
  ) { }


  getAuthenticatedUser(){
    //if (this.getAuthenticatedUser() != null) {
      console.log('basic-auth-service - getAuthUser, user is: ' +  sessionStorage.getItem(AUTHENTICATED_USER) )
      return  sessionStorage.getItem(AUTHENTICATED_USER)
    }

  getAuthenticatedToken(){
    return  sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }


  executeJWTAuthenticationService(username, password){
    console.log("in executeJWT AuthenticationService")
 
     return this.http.post<any>(`${API_URL}/authenticate`,{
       username,
       password
     }).pipe(
         map(
           data => {
             sessionStorage.setItem(AUTHENTICATED_USER, username);
             sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
             return data; 
           }
         )
     );
   }

  executeAuthenticationService(username, password){
   console.log("in executeAuthenticationService")
   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 

   let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`${API_URL}/basic-auth`,
    {headers : header}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data; 
          }
        )
    );
  }


}
export class AuthenticationBean{
  constructor(public message:string){}
}

