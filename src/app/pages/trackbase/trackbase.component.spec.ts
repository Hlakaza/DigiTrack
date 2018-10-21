import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbaseComponent } from './trackbase.component';

describe('TrackbaseComponent', () => {
  let component: TrackbaseComponent;
  let fixture: ComponentFixture<TrackbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
