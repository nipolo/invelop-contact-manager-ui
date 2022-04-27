import { TestBed } from '@angular/core/testing';

import { UrlGenerationService } from './url-generation.service';

describe('UrlGenerationService', () => {
  let service: UrlGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
