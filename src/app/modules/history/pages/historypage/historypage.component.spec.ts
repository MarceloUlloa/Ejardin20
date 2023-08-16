import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HistorypageComponent } from './historypage.component';
import { SearchService } from '@modules/history/services/search.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HistorypageComponent', () => {
  let component: HistorypageComponent;
  let fixture: ComponentFixture<HistorypageComponent>;
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorypageComponent],
      imports:[HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    fixture = TestBed.createComponent(HistorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
 
});
