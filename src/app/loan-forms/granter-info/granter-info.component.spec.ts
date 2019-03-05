import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GranterInfoComponent } from './granter-info.component';

describe('GranterInfoComponent', () => {
  let component: GranterInfoComponent;
  let fixture: ComponentFixture<GranterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GranterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
