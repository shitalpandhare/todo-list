import { Injectable } from '@angular/core';
import { Plan } from './plan.model';
import { DataStorageService } from './data-storage.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    private dataStorageServive: DataStorageService,
    private http: HttpClient
  ) {}

  todoChanged = new Subject<Plan[]>();

  addTitle(plans: Plan[]) {
    this.http
      .put(
        'https://todo-list-71142-default-rtdb.firebaseio.com/title.json',
        plans
      )
      .subscribe(response => {
        this.todoChanged.next(response);
      });
  }

  getTodo() {
    return this.http.get(
      'https://todo-list-71142-default-rtdb.firebaseio.com/title.json'
    );
  }

  // deleteTodo(title: number) {
  //   this.http.delete(
  //     'https://todo-list-71142-default-rtdb.firebaseio.com/title.json',
  //     { params: new HttpParams().set('title', '0') }
  //   );
  // }
}
