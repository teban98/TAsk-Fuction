import { Component } from '@angular/core';
import {Project} from './models/project'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-definition';

  projectArray : Project[] = [
    {id:1,name:"Project 1",description:"Description 1"},
    {id:2,name:"Project 2",description:"Description 2"},
    {id:3,name:"Project 3",description:"Description 3"}
  ]

  SelectedProject : Project = new Project();

  addOrEdit(){
    if(this.SelectedProject.id === 0){
      this.SelectedProject.id = this.projectArray.length + 1;
      this.projectArray.push(this.SelectedProject)
    }
    this.SelectedProject = new Project();
   
  }

  openForEdit(project: Project){
    this.SelectedProject = project
  }
  
  delete(){
    this.projectArray = this.projectArray.filter(x => x != this.SelectedProject)
  }
}
