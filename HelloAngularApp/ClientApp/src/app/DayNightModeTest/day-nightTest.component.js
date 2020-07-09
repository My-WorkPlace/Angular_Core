var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let DayNightTestComponent = class DayNightTestComponent {
    constructor() {
        //document.body.style.background = 'rgba(0, 0, 0, .6)';
        //document.getElementById('MyBody').style.background = 'rgba(0, 0, 0, .6)';
        this.dayNight = true;
    }
    ngOnInit() {
    }
    ChangeTheme() {
        if (this.dayNight) {
            document.getElementById('MyBody').style.background = '#092c3e';
            this.dayNight = false;
        }
        else {
            document.getElementById('MyBody').style.background = '#fff';
            this.dayNight = true;
        }
    }
};
DayNightTestComponent = __decorate([
    Component({
        selector: "day-nightTest",
        templateUrl: './day-nightTest.component.html',
        styleUrls: ['./day-nightTest.component.css'],
    })
], DayNightTestComponent);
export { DayNightTestComponent };
//# sourceMappingURL=day-nightTest.component.js.map