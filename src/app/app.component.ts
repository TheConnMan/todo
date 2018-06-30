import { Component, } from '@angular/core';
import { ToDoService } from './shared/todo.service';
import { Item } from './models/item';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {

  text: string;

  constructor(public todoService: ToDoService) {
  
  }

  createItem() {
    if (this.text) {
      this.todoService.addItem(this.text);
      this.text = '';
    }
  }

  toggleItem(item: Item) {
    item.completed = !item.completed;
    this.todoService.save();
  }

  deleteItem(item: Item) {
    this.todoService.deleteItem(item);
  }
}
