import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackspageComponent } from './trackspage.component';

describe('TrackspageComponent', () => {
  let component: TrackspageComponent;
  let fixture: ComponentFixture<TrackspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackspageComponent]
    });
    fixture = TestBed.createComponent(TrackspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
