import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancelistComponent } from './advancelist.component';

describe('AdvancelistComponent', () => {
  let component: AdvancelistComponent;
  let fixture: ComponentFixture<AdvancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
