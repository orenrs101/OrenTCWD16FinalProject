import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {
  private url:string = 'http://localhost:3000';

  constructor(private http:Http) { 

  }

  sendTodoItem(todoItem) {
    return this.http.post(this.url + '/api/saveItem', todoItem).map(res => res.text());
  }

  deleteTodoItem(todoItem) {
    console.log(todoItem);
    return this.http.post(this.url + '/api/deleteItem', todoItem).map(res => res.text());
  }

  getAllTodoItems() {
    return this.http.get(this.url + '/api/getAllTodoItems').map(res => res.json());
  }
}

