import { TestBed } from '@angular/core/testing';

import { SegurosService } from './seguro.service';

describe('SeguroService', () => {
  let service: SegurosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegurosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
