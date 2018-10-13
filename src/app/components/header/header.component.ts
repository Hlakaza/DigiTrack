import {  Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('mainHeader') elementView: ElementRef;
  headerHeight: number;
  menuState: string;
  constructor(
    private render: Renderer2
  ) {}

  ngOnInit() {
    this.headerHeight = this.elementView.nativeElement.offsetHeight;
    this.setBodyPadding(this.headerHeight);
  }

  /**
   * Sets the padding top of the body to the height of header
   * @param value Height of header
   */
  setBodyPadding(value) {
    this.render.setStyle(document.body, 'padding-top', value + 'px');
  }

  /**
   * Menu state output from app-sidenav
   * @param event Menu state
   */
  setMenuState(event) {
    this.menuState = event;
  }

}
