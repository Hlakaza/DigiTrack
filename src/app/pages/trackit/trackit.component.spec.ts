import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackitComponent } from './trackit.component';

describe('TrackitComponent', () => {
  let component: TrackitComponent;
  let fixture: ComponentFixture<TrackitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
