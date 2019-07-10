import { TestBed } from '@angular/core/testing';

import { StoreListService } from './store-list.service';

describe('StoreListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreListService = TestBed.get(StoreListService);
    expect(service).toBeTruthy();
  });
});
