import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor( private taskService: TaskService
    ){}
  ngOnInit(): void {
    //Como promesa
    this.taskService.getTasks().subscribe((tasks) =>{
      this.tasks = tasks;
    });
  }
}
  

// Aqui se importo: 1.La interfas de esa lista de tareas donde se definio el tipo de valor.  (import {Task} from '../task'')
//                  2. La lista  de task que se creo en formato json. (import {TASK} from '../mock-tasks' '

//Por ultimo se inicializa las tasks como un array de tasks importando la interfas TASKS desde el archivo de mock-tasks.