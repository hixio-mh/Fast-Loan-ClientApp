import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantersComponent } from './granters.component';

describe('GrantersComponent', () => {
  let component: GrantersComponent;
  let fixture: ComponentFixture<GrantersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
