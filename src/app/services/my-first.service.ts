import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init()
  }

  init(): void {
    this.insert({
      name: 'a',
      email: 'e',
      message:'Hello World!'
    });
    this.insert({
      name: 'aa',
      email: 'e2',
      message:'Hello World!1'
    });
    this.insert({
      name: 'awww',
      email: 'easda',
      message:'Hello World!2'
    });
  }

  insert(message: {name:string, email:string, message:string}) {
    this.messages.push(message);
  }

  getAllMessages(): Array<any> { return this.messages; }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
