import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  url: string = 'assets/dados/statesbr.json'

  constructor(
    private httpClient: HttpClient
  ) { }

  getStatesBr() {
    return this.httpClient.get(this.url)
  }
}
