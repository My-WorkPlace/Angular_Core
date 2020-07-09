var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let DayNightComponent = class DayNightComponent {
    constructor() {
        //document.body.style.background = 'rgba(0, 0, 0, .6)';
        //document.getElementById('MyBody').style.background = 'rgba(0, 0, 0, .6)';
    }
    ngOnInit() {
    }
};
DayNightComponent = __decorate([
    Component({
        selector: "day-night",
        templateUrl: './day-night.component.html',
        styleUrls: ['./day-night.component.css'],
    })
], DayNightComponent);
export { DayNightComponent };
//# sourceMappingURL=day-night.component.js.map