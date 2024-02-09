import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignsitelistComponent } from './assignsitelist.component';

describe('AssignsitelistComponent', () => {
  let component: AssignsitelistComponent;
  let fixture: ComponentFixture<AssignsitelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignsitelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignsitelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
