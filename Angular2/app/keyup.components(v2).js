"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var KeyUpComponent_v2 = (function () {
    function KeyUpComponent_v2() {
        this.values = '';
    }
    KeyUpComponent_v2.prototype.onKey = function (value) {
        this.values += value + '|';
    };
    return KeyUpComponent_v2;
}());
KeyUpComponent_v2 = __decorate([
    core_1.Component({
        selector: 'key-up2',
        template: "\n    \u4ECE\u4E00\u4E2A\u6A21\u677F\u5F15\u7528\u53D8\u91CF\u4E2D\u83B7\u5F97\u7528\u6237\u8F93\u5165\n    <input #box (keyup)=\"onKey(box.value)\"/>\n    <p>{{values}}</p>\n  "
    })
], KeyUpComponent_v2);
exports.KeyUpComponent_v2 = KeyUpComponent_v2;
//# sourceMappingURL=keyup.components(v2).js.map