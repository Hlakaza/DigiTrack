import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbaseDashboardComponent } from './trackbase-dashboard.component';

describe('TrackbaseDashboardComponent', () => {
  let component: TrackbaseDashboardComponent;
  let fixture: ComponentFixture<TrackbaseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackbaseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackbaseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
