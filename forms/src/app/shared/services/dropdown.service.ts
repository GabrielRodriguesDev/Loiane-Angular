import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StatesBr } from '../models/states-br';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  url: string = 'assets/dados/statesbr.json'

  constructor(
    private httpClient: HttpClient
  ) { }

  getStatesBr(): Observable<StatesBr> {
    return this.httpClient.get<StatesBr>(this.url)
  }
}
