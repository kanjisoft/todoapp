import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    console.log("Hello World Bean Service");
  }

  executeHelloWorldBeanService2(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean2');
    console.log("Hello World Bean Service2");
  }
 
  executeHelloWorldServiceWithPathVariable(name){
    console.log("Hello World Service With Path Variable");

    
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //  Authorization: basicAuthHeaderString
    // });

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`
      //,
      //{headers : header}
    );
  }
  
  // no longer needed, replaced by interceptor
  // createBasicAuthenticationHttpHeader(){
  //   let username = 'mark';
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 
  //   return basicAuthHeaderString;   
  // }

  // Access to XMLHttpRequest at 'http://localhost:8080/users/mark/todos' from origin 
  //'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
  // header is present on the requested resource.

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/mark' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy: 
  // Response to preflight request doesn't pass access control check: It does not have HTTP ok status.

}
