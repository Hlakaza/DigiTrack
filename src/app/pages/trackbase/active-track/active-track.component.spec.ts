import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTrackComponent } from './active-track.component';

describe('ActiveTrackComponent', () => {
  let component: ActiveTrackComponent;
  let fixture: ComponentFixture<ActiveTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
