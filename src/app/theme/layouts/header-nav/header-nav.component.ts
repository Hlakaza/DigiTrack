import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AuthenticationService } from '../../../auth/_services/authentication.service';
import { Router } from '@angular/router';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {


    constructor(private _authService: AuthenticationService, private _router: Router) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

    logout() {
        this._authService.logout();
        this._router.navigate(['/login']);
     }

}