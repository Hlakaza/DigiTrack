import { Component, OnInit, AfterContentInit, ContentChildren, Input, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {

  constructor() { }
  activeTabs: any[];

  @Input() vertical = false;
  @Input() liClass = 'nav-item';
  @Input() ulClass = 'nav';
  @Input() selectedIndex = 0;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // Make sure there are tabs
    if (this.tabs.length) {
      this.selectTab(this.selectedIndex);
    }
  }

  selectTab(index) {

    if (!this.tabs.toArray()[index].disabled) {
      this.tabs.toArray().forEach(value => value.active = false);
      this.tabs.toArray()[index].active = true;
    }
  }
  ngOnInit() {
  }

}
