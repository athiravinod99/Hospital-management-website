import { TestBed } from '@angular/core/testing';

import { DocSignupService } from './doc-signup.service';

describe('DocSignupService', () => {
  let service: DocSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
