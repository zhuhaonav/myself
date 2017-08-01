"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var KeyUpComponent_v1 = (function () {
    function KeyUpComponent_v1() {
        this.values = '';
    }
    KeyUpComponent_v1.prototype.onKey = function (event) {
        this.values += event.target.value + '|';
    };
    return KeyUpComponent_v1;
}());
KeyUpComponent_v1 = __decorate([
    core_1.Component({
        selector: 'key-up1',
        template: "\n    $event\u5BF9\u8C61\u53D6\u5F97\u7528\u6237\u8F93\u5165\n    <input (keyup)=\"onKey($event)\">\n    <p>{{values}}</p>\n    <input #box (keyup)=\"0\">\n    <p>{{box.value}}</p>\n  "
    })
], KeyUpComponent_v1);
exports.KeyUpComponent_v1 = KeyUpComponent_v1;
//# sourceMappingURL=keyup.components(v1).js.map