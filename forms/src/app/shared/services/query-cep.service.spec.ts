/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QueryCepService } from './query-cep.service';

describe('Service: QueryCep', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryCepService]
    });
  });

  it('should ...', inject([QueryCepService], (service: QueryCepService) => {
    expect(service).toBeTruthy();
  }));
});
