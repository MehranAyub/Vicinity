import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPasscodeComponent } from './email-passcode.component';

describe('EmailPasscodeComponent', () => {
  let component: EmailPasscodeComponent;
  let fixture: ComponentFixture<EmailPasscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPasscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
