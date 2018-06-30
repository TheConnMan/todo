import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Item } from '../models/item';

@Injectable()
export class ToDoService {

  private static KEY = 'items';

  items: Item[];

  constructor() {
    this.items = JSON.parse(localStorage.getItem(ToDoService.KEY) || '[]')
  }

  public getItems(): Item[] {
    return this.items;
  }

  public addItem(text: string): void {
    this.items.push(new Item(text));
    this.save();
  }

  public deleteItem(item: Item): void {
    this.items.splice(this.items.indexOf(item), 1);
    this.save();
  }

  public save(): void {
    localStorage.setItem(ToDoService.KEY, JSON.stringify(this.items));
  }
}
