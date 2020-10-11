import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Quote } from './quote';

import { FAVQS_API_KEY } from '../../../secrets';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}
  readonly BASE_URL = 'api/quotes';

  quotes: Quote[] = [];

  getQuotes():Observable<Quote[]> {
    const options: object = {
      headers: new HttpHeaders({
        Authorization: `Token token="${FAVQS_API_KEY}"`,
      }),
    };
    this.http.get<any>(this.BASE_URL, options).subscribe((data) => {
      data.quotes.map((quote) => {
        const { id, author, body, tags } = quote;
        let newQuote: Quote = {
          id,
          author,
          body,
          tags,
        };
        this.quotes.push(newQuote);
      });
    });
    return of(this.quotes);
  }
}
