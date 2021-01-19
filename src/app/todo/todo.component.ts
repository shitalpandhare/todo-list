import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from './todo.service';
import { Plan } from './plan.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  isTouched = false;

  todolist: Plan[] = [];

  ngOnInit(): void {
    this.todoService.getTodo().subscribe(response => {
      response ? (this.todolist = response) : (this.todolist = []);
      console.log(this.todolist);
    });

    this.todoService.todoChanged.subscribe(res => {
      this.todolist = res;
      console.log(this.todolist);

      this.todolist.sort((a, b) => {
        return a.isChecked - b.isChecked;
      });
    });
  }

  addTitle(title: any) {
    this.todolist.push(new Plan(title.value, false));
    this.todoService.addTitle(this.todolist);
    title.value = null;
  }

  onDelete(index: number) {
    this.todolist.splice(index, 1);
    this.todoService.todoChanged.next(this.todolist);
    this.todoService.addTitle(this.todolist);

    // this.todoService.deleteTodo(index);
  }

  check(index: number, flag: boolean) {
    console.log('here');
    this.todolist[index].isChecked = !flag;
    this.todoService.todoChanged.next(this.todolist);
    this.todoService.addTitle(this.todolist);
  }
}
