import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  formLogin: FormGroup
  loginError: boolean = false


  constructor( private loginService: LoginService, private router: Router, private formBuilder:FormBuilder) { 

    
    this.formLogin = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
      }
    )

  }


  ngOnInit(): void {
  }

 
  login(formLogin: FormGroup){    
    
    const email = formLogin.value.email
    const password = formLogin.value.password

    this.loginService.login(email, password);
    
    if ('auth/user-not-found' || 'auth/wrong-password') {
      this.loginError = true;      
    } 
    
  } 


  get Email(){
    return this.formLogin.get('email');
  }

  get Password(){
    return this.formLogin.get('password');
  }
  
}
