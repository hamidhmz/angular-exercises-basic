import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableIntervalExampleComponent } from './observable-interval-example.component';

describe('ObservableIntervalExampleComponent', () => {
  let component: ObservableIntervalExampleComponent;
  let fixture: ComponentFixture<ObservableIntervalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableIntervalExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableIntervalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
