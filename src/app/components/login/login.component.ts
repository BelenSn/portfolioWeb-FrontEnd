import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loginError: boolean = false;
  

  constructor( private userService: UserService,private router: Router, private formBuilder:FormBuilder) { 

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl
    })

    this.formLogin = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
      }
    )

  }


  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error);
        this.loginError = true;
      });
  } 


  get Email(){
    return this.formLogin.get('email');
  }

  get Password(){
    return this.formLogin.get('password');
  }

}
