import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEgTDComponent } from './form-eg-td.component';

describe('FormEgTDComponent', () => {
  let component: FormEgTDComponent;
  let fixture: ComponentFixture<FormEgTDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEgTDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEgTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
