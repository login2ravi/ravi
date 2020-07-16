import { TestBed } from '@angular/core/testing';

import { LoanBaseService } from './loan-base.service';

describe('LoanBaseService', () => {
  let service: LoanBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
