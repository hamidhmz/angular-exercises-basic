import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDynamicComponentComponent } from './alert-dynamic-component.component';

describe('AlertDynamicComponentComponent', () => {
  let component: AlertDynamicComponentComponent;
  let fixture: ComponentFixture<AlertDynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDynamicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
