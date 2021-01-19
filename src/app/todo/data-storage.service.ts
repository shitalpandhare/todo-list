import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from './plan.model';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  todo: Plan[] = [];
  storeTitle(plan: Plan[]) {
    // this.todo.push(plan);
    this.http
      .post(
        'https://todo-list-71142-default-rtdb.firebaseio.com/title.json',
        plan
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
