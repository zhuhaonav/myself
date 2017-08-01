import { Component } from '@angular/core';
@Component({
  selector: 'key-up1',
  template: `
    $event对象取得用户输入
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})

export class KeyUpComponent_v1 {
  values = '';
  onKey(event: KeyboardEvent){
    this.values += (<HTMLInputElement>event.target).value + '|'
  }
}