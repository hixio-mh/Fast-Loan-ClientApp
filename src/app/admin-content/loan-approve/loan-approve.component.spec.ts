import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApproveComponent } from './loan-approve.component';

describe('LoanApproveComponent', () => {
  let component: LoanApproveComponent;
  let fixture: ComponentFixture<LoanApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
