import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({ name: 'sortingItems', pure: false })
export class SortingItemsPipe implements PipeTransform {

  transform(records: Item[]): any {
    return records.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      return a.created - b.created;
    });
  };
}