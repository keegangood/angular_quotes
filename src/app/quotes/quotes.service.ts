import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Quote } from './quote';

import { FAVQS_API_KEY } from '../../../secrets';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}
  readonly BASE_URL = 'api/quotes/?filter="love"&type="tag"';

  quotes: Quote[] = [];

  loading = new BehaviorSubject(true);

  getQuotes(): Observable<Quote[]> {
    const options: object = {
      headers: new HttpHeaders({
        Authorization: `Token token="${FAVQS_API_KEY}"`,
      }),
    };
    this.http.get<any>(this.BASE_URL, options).subscribe((data) => {
      data.quotes.map((quote) => {
        let { id, author, body, tags } = quote;
        body = body.replace('<br>', ' ');
        let newQuote: Quote = {
          id,
          author,
          body,
          tags,
        };
        this.quotes.push(newQuote);
      });
      this.loading.next(false);
    });
    return of(this.quotes);
  }

  isLoading():BehaviorSubject<boolean>{
    return this.loading
  }
}
