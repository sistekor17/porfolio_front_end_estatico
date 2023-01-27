import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title : string = "task list"; 

  toggleAddTask(){
    console.log("toggle add task!!")
  }
}
