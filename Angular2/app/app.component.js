"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var site_1 = require("./site");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ZH';
        this.currentUser = {
            givenName: 'hao'
        };
        this.sites = [
            new site_1.Site(1, '菜鸟教程'),
            new site_1.Site(2, 'Google'),
            new site_1.Site(3, 'Taobao'),
            new site_1.Site(4, 'Facebook')
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h2>{{title}}</h2>\n    <h1>\u6211\u7684\u7B2C\u4E00\u4E2A Angular \u5E94\u7528</h1>\n    <input [value]=\"currentUser.givenName\">\n    <ul>\n      <li *ngFor=\"let Site of sites\">\n        {{Site.name}}\n      </li>\n    </ul>\n    <p *ngIf=\"sites.length>3\">\u5F88\u591Alist</p>\n    <click-me></click-me>\n    <key-up1></key-up1>\n    <key-up2></key-up2>\n    <key-up3></key-up3>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map