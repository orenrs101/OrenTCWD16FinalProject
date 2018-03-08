import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [RestService] // new instance of the service
})
export class ItemsListComponent implements OnInit {
  placeholder: string = 'Type Your Item';
  currUserInput: string;
  currKeyDownInput = '';
  todoItems: Object[] = [];
  isBlue = true;
  @Input() parentInput = '';

  constructor(private rest:RestService) { }

  ngOnInit() {
  }

  addItem() {
    console.log(this.currUserInput);
    
    this.rest.sendTodoItem({
      todoItem: this.currUserInput
    }).subscribe(() => {
      this.rest.getAllTodoItems().subscribe((todoItemsArr)=> {
        this.todoItems = todoItemsArr;
        console.log("your todo items arr: ", this.todoItems);
      });
    });

    // this.todoItems.push(this.currUserInput);
    this.currUserInput = '';
  }

  displayCurrentInput(event: any) {
    console.log('hi', event.target.value);
    this.currKeyDownInput = event.target.value;
  }

  removeItem(indexToRemove) {
    //this.todoItems.splice(indexToRemove, 1);
    
    this.rest.deleteTodoItem(this.todoItems[indexToRemove]).subscribe(() => {
      this.rest.getAllTodoItems().subscribe((todoItemsArr)=> {
        this.todoItems = todoItemsArr;
        console.log("your todo items arr: ", this.todoItems);
      });
    });
  }

  strikeItem(htmlElement) {
    htmlElement.strike();
  }

}
