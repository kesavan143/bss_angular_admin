import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecontractsComponent } from './updatecontracts.component';

describe('UpdatecontractsComponent', () => {
  let component: UpdatecontractsComponent;
  let fixture: ComponentFixture<UpdatecontractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecontractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecontractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
