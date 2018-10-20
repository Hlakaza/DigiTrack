import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';


@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
    currentYear;
    constructor() {
      this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {

    }

}