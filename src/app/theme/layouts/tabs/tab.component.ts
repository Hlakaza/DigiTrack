import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tab',
    template: `
    <div *ngIf="active" [ngClass]="tabClass">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
    @Input() title: string;
    @Input() tabClass = 'tab-content';
    @Input() disabled: boolean;
    @Input() active = false;
    @Input() svgType: string;
    @Input() svgClass: string;
}
