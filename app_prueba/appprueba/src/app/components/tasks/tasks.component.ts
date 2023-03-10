import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
  
}
// Aqui se importo: 1.La interfas de esa lista de tareas donde se definio el tipo de valor.  (import {Task} from '../task'')
//                  2. La lista  de task que se creo en formato json. (import {TASK} from '../mock-tasks' '

//Por ultimo se inicializa las tasks como un array de tasks importando la interfas TASKS desde el archivo de mock-tasks.