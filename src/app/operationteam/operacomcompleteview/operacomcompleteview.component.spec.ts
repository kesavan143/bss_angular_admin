import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacomcompleteviewComponent } from './operacomcompleteview.component';

describe('OperacomcompleteviewComponent', () => {
  let component: OperacomcompleteviewComponent;
  let fixture: ComponentFixture<OperacomcompleteviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacomcompleteviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacomcompleteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
