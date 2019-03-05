import { TestBed } from '@angular/core/testing';

import {LoanServiceService  } from './loan-service.service';

describe('LoanServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanServiceService = TestBed.get(LoanServiceService);
    expect(service).toBeTruthy();
  });
});
