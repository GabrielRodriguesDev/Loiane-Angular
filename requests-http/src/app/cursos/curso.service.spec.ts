/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CursoServiceService } from './curso-service.service';

describe('Service: CursoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursoServiceService]
    });
  });

  it('should ...', inject([CursoServiceService], (service: CursoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
