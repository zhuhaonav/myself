import { Component } from '@angular/core';

@Component({
  selector: 'key-up3',
  template: `
    按键事件过滤
    <input #box (keyup.enter)="values=box.value"/>
    <p>{{values}}</p>
    blur事件
    <input type="number" #box2 (keyup.enter)="values2=box.value" (blur)="values2=box2.value"/>
    <p>{{values2}}</p>
  `
})

export class KeyUpComponent_v3 {
  values = '';
  values2 = '';
}