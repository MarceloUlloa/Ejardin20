import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritespageComponent } from './favoritespage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FavoritespageComponent', () => {
  let component: FavoritespageComponent;
  let fixture: ComponentFixture<FavoritespageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FavoritespageComponent],
      imports: [HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents;
    fixture = TestBed.createComponent(FavoritespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
});
