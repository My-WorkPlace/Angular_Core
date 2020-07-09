import { Component, OnInit } from '@angular/core';

@Component({
    selector: "day-nightTest",
    templateUrl: './day-nightTest.component.html',
    styleUrls: ['./day-nightTest.component.css'],

})
export class DayNightTestComponent implements OnInit {

    dayNight:boolean;
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
        } else {
            document.getElementById('MyBody').style.background = '#fff';
            this.dayNight = true;
        }

    }
}