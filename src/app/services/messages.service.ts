import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = '';

  constructor() { }
  add(message: string){
    this.message = message; 
    setTimeout(() => {
      this.clear()
    },4000)
  }
  clear(){
    this.message = '';
  }
}