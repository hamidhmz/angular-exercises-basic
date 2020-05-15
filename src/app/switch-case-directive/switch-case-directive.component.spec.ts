import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseDirectiveComponent } from './switch-case-directive.component';

describe('SwitchCaseDirectiveComponent', () => {
  let component: SwitchCaseDirectiveComponent;
  let fixture: ComponentFixture<SwitchCaseDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCaseDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
