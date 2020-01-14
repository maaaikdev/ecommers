import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';

  constructor (private taskService:TaskService){

  }

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  getTask() {
    this.taskService.getTask('2')
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  createTask(){
    const task = {
      userId: '1',
      title: 'Cahnge title',
      completed: true
    };
    this.taskService.createTask(task)
    .subscribe((newTask) => {
      console.log(newTask);
    });
  }

  updateTask(){
    const task = {
      id:'201',
      userId: '1',
      title: 'Por otro titulo',
      completed: true
    };
    this.taskService.createTask(task)
    .subscribe((newTask) => {
      console.log(newTask);
    });
  }

  deleteTask() {
    this.taskService.deleteTask('1')
    .subscribe(data => {
      console.log(data);
    });
  }

  // Cambiar color fondo
  
  
}
