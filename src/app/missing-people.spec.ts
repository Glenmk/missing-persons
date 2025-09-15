import { TestBed } from '@angular/core/testing';

import { MissingPeople } from './missing-people';

describe('MissingPeople', () => {
  let service: MissingPeople;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissingPeople);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
