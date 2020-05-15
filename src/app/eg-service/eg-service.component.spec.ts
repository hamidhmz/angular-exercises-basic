import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgServiceComponent } from './eg-service.component';

describe('EgServiceComponent', () => {
  let component: EgServiceComponent;
  let fixture: ComponentFixture<EgServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
