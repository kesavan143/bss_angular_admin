import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacomcompletelistComponent } from './operacomcompletelist.component';

describe('OperacomcompletelistComponent', () => {
  let component: OperacomcompletelistComponent;
  let fixture: ComponentFixture<OperacomcompletelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacomcompletelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacomcompletelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
