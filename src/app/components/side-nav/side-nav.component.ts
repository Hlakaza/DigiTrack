import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  navItems = [
    {
      'item': 'Dashboard',
      'link': ''
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
      'link': 'profile'
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
  constructor() { }

  ngOnInit() {}

}
