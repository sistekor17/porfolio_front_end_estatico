import { Injectable } from '@angular/core';
// La librilla Observable nos permite difinir que un metodo es observable de manera asincronica
import { Observable, of } from 'rxjs';
import { Task } from '../components/Task';
import { TASKS } from '../components/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable <Task[]>{
    const tasks = of(TASKS);
    return tasks
  }
}
