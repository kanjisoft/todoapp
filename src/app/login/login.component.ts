import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mark'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,
    private hardcodedAuthenticationService: HarcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    // if (this.username === 'mark' && this.password == 'dummy'){
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  handleJWTBasicAuthLogin() {
    console.log(this.username)
    
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe (
        data => {
      
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false
        }, 
        error => {
          console.log(error)
          this.invalidLogin = true
        }

    )
}


  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe (
        data => {
            console.log("login componenent  received success from executeAuthenticationService")
            let tmp = this.basicAuthenticationService.getAuthenticatedUser();

            console.log("got authenticacated user from basic auth servvice: " + tmp)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false
        }, 
        error => {
          console.log(error)
          this.invalidLogin = true
        }

    )
}



}
