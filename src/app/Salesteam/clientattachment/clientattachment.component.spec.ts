import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientattachmentComponent } from './clientattachment.component';

describe('ClientattachmentComponent', () => {
  let component: ClientattachmentComponent;
  let fixture: ComponentFixture<ClientattachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientattachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientattachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
