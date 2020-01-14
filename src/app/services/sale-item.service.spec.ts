import { TestBed } from '@angular/core/testing';

import { SaleItemService } from './sale-item.service';

describe('SaleItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleItemService = TestBed.get(SaleItemService);
    expect(service).toBeTruthy();
  });
});
