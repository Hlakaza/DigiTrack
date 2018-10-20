import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {
    navItems = [
        {
          'item': 'Dashboard',
          'link': 'index'
        },
        {
          'item': 'Account Management',
          'link': 'account-management'
        },
        {
          'item': 'Trackbase',
          'link': 'trackbase',
          'subItems': [
            { 'item': 'Sequence' },
            { 'item': 'Timeline' },
            { 'item': ' Action Plan' },
            { 'item': 'Checklist' },
            { 'item': ' SLA' },
          ]
        },
        {
          'item': 'Trackit',
          'link': 'trackit',
        },
        {
          'item': 'Reports',
          'link': 'reports'
        },
        {
          'item': 'User Profile',
          'link': 'user-profile'
        },
        {
          'item': 'System Data',
          'link': 'system-data'
        },
        {
          'item': 'Setup',
          'link': 'setup'
        }
      ];
   
    constructor() {
       
    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initAside();
        let menu = (<any>$('#m_aside_left')).mMenu(); let item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item'); (<any>$(menu).data('menu')).setActiveItem(item);
    }

}