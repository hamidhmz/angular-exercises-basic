import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDirectiveComponent } from './basic-directive.component';

describe('BasicDirectiveComponent', () => {
  let component: BasicDirectiveComponent;
  let fixture: ComponentFixture<BasicDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
