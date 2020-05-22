import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEgReactiveComponent } from './form-eg-reactive.component';

describe('FormEgReactiveComponent', () => {
  let component: FormEgReactiveComponent;
  let fixture: ComponentFixture<FormEgReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEgReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEgReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
