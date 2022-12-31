import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from 'src/app/models/skills';
import { LoginService } from 'src/app/services/login.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: Skills[] = [];
  public editSkill: Skills | undefined;
  public deleteSkill: Skills | undefined;

  constructor(private skillService: SkillsService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  isLogged(){
    return this.loginService.isLogged();
  }

  public getSkills():void{
    this.skillService.getSkill().subscribe({
      next: (Response: Skills[]) => {
        this.skills = Response;
      },
      error:(error:HttpErrorResponse)=> {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:string, skill? : Skills): void{
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle','modal');

    if (mode === 'add'){
      button.setAttribute('data-bs-target', '#addSkillModal');
    
    } else if (mode === 'edit'){
      this.editSkill = skill;
      button.setAttribute('data-bs-target','#editSkillModal');
    
    }else if (mode === 'delete'){
      this.deleteSkill = skill;
      button.setAttribute('data-bs-target','#deleteSkillModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddSkill(addForm: NgForm): void{
    
    document.getElementById('add-skill-form')?.click();
    
    this.skillService.addSkill(addForm.value).subscribe({
      
      next: (response: Skills) => {
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      
      error:(error: HttpErrorResponse) => {        
        alert(error.message);
        addForm.reset();
      }
      
    })
  }

  public onEditSkill(skill: Skills): void{

    this.editSkill = skill;    
    
    this.skillService.editSkill(skill).subscribe({
      
      next: (response: Skills) => {
        console.log(response);
        this.getSkills();        
      },

      error:(error: HttpErrorResponse) => {        
        alert(error.message);        
      }
    })
  }

  public onDeleteSkill(idSkill: number): void{    
    
    this.skillService.deleteSkill(idSkill).subscribe({
      
      next: (response: void) => {
        console.log(response);
        this.getSkills();        
      },

      error:(error: HttpErrorResponse) => {        
        alert(error.message);        
      }
    })
  }




}
