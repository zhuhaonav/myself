import { Component } from '@angular/core';
import { Site } from './site'
@Component({
  selector: 'my-app',
  template: `
    <h2>{{title}}</h2>
    <h1>我的第一个 Angular 应用</h1>
    <input [value]="currentUser.givenName">
    <ul>
      <li *ngFor="let Site of sites">
        {{Site.name}}
      </li>
    </ul>
    <p *ngIf="sites.length>3">很多list</p>
    <click-me></click-me>
    <key-up1></key-up1>
    <key-up2></key-up2>
    <key-up3></key-up3>
`
})
export class AppComponent {
  title = 'ZH'
  currentUser={
    givenName: 'hao'
  }
  sites = [
    new Site(1, '菜鸟教程'),
    new Site(2, 'Google'),
    new Site(3, 'Taobao'),
    new Site(4, 'Facebook')
  ];
}
