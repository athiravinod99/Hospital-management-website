import { TestBed } from '@angular/core/testing';

import { DocterpageService } from './docterpage.service';

describe('DocterpageService', () => {
  let service: DocterpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocterpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
