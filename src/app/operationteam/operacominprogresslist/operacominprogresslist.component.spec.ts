import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacominprogresslistComponent } from './operacominprogresslist.component';

describe('OperacominprogresslistComponent', () => {
  let component: OperacominprogresslistComponent;
  let fixture: ComponentFixture<OperacominprogresslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacominprogresslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacominprogresslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
