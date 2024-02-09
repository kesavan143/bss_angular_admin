import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightreportComponent } from './nightreport.component';

describe('NightreportComponent', () => {
  let component: NightreportComponent;
  let fixture: ComponentFixture<NightreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
