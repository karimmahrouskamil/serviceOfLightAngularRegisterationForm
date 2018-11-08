import { TestBed, inject } from '@angular/core/testing';

import { MakhdouminServiceService } from './makhdoumin-service.service';

describe('MakhdouminServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakhdouminServiceService]
    });
  });

  it('should be created', inject([MakhdouminServiceService], (service: MakhdouminServiceService) => {
    expect(service).toBeTruthy();
  }));
});
