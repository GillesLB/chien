import { TestBed } from '@angular/core/testing';

import { ChienService } from './chien.service';

describe('ChienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChienService = TestBed.get(ChienService);
    expect(service).toBeTruthy();
  });
});
