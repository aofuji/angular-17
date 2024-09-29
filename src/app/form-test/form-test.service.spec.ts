import { TestBed } from '@angular/core/testing';

import { FormTestService } from './form-test.service';

describe('FormTestService', () => {
  let service: FormTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTestService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
