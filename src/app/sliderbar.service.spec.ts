import { TestBed } from '@angular/core/testing';

import { SliderbarService } from './sliderbar.service';

describe('SliderbarService', () => {
  let service: SliderbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
