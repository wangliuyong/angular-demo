import { TestBed } from '@angular/core/testing';

import { StoreDetailService } from './store-detail.service';

describe('StoreDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreDetailService = TestBed.get(StoreDetailService);
    expect(service).toBeTruthy();
  });
});
