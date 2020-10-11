import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quote } from './quote';

import { FAVQS_API_KEY } from '../../../secrets.js';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}
  readonly BASE_URL = 'api/quotes';

  quotes: Observable<Quote[]>;

  getQuotes() {
    const options: object = {
      headers: new HttpHeaders({
        Authorization: `Token token="${FAVQS_API_KEY}"`,
      }),
    };
    this.http
      .get(this.BASE_URL, options)
      .subscribe((data) => console.log(data));
  }
}
