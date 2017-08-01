import { Component } from '@angular/core';

@Component({
  selector: 'key-up2',
  template: `
    从一个模板引用变量中获得用户输入
    <input #box (keyup)="onKey(box.value)"/>
    <p>{{values}}</p>
  `
})

export class KeyUpComponent_v2{
  values = '';
  onKey(value: string){
    this.values += value + '|';
  }
}