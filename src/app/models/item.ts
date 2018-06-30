export class Item {

  completed: boolean = false;
  created: number = new Date().getTime();

  constructor(public text: string){

  }
}
