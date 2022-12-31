import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor( private loginService: LoginService){} 
  
  ngOnInit(): void {
    
    firebase.initializeApp({
      apiKey: "AIzaSyAIuVEsvXWCDXliSQE4doIqCIOLdlol3lU",
      authDomain: "proyectoweb-ap.firebaseapp.com",
    });
  }

  isLogged(){
    return this.loginService.isLogged();
  }

  logout(){
    this.loginService.logout();
  }

  

}
