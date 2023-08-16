import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrackspageComponent } from './trackspage.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TrackspageComponent', () => {
  let component: TrackspageComponent;
  let fixture: ComponentFixture<TrackspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackspageComponent],
      imports:[HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    fixture = TestBed.createComponent(TrackspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
