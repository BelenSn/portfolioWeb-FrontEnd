import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about : About | undefined;
  public editAbout : About | undefined;

  constructor(private aboutService : AboutService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  isLogged(){
    return this.loginService.isLogged();
  }

  public getAbout():void{
    this.aboutService.getAbout().subscribe({
      next: (response: About) => {
        this.about = response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:string, about? : About): void{
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle','modal');

    if (mode === 'edit'){
      this.editAbout = about;
      button.setAttribute('data-bs-target','#editAboutModal');
    
    }

    container?.appendChild(button);
    button.click();
  }

  

  public onEditAbout(about: About): void{

    this.editAbout = about;    
    
    this.aboutService.editAbout(about).subscribe({
      
      next: (response: About) => {
        console.log(response);
        this.getAbout();
        
      },

      error:(error: HttpErrorResponse) => {
        
        alert(error.message);
        
      }
    })
  }
}
