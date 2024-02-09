import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryUnitComponent } from './manual-entry-unit.component';

describe('ManualEntryUnitComponent', () => {
  let component: ManualEntryUnitComponent;
  let fixture: ComponentFixture<ManualEntryUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
