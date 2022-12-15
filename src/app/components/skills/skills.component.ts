import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: Skills[] = [];

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
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
}
