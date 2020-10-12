import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Quote } from './quote';
import {Query} from './search/query';

import { FAVQS_API_KEY } from '../../../secrets';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor(private http: HttpClient) {}
  
  quotes: Quote[] = [];
  
  
  loading = new BehaviorSubject(true);
  getQuotes(query:Query): Observable<Quote[]> {
    this.loading.next(true);
    let URL = 'api/quotes/';
    this.quotes = [];
    if(query){
        let {text, searchBy} = query;
        if(text.replace(/^\s+|\s+$/g ,'') === ''){
            alert("Search cannot be blank")
        } else {
            URL += `?filter=${text}&type=${searchBy}`
        }
    }    

    const options: object = {
      headers: new HttpHeaders({
        Authorization: `Token token="${FAVQS_API_KEY}"`,
      }),
    };
    this.http.get<any>(URL, options).subscribe((data) => {
      data.quotes.map((quote) => {
        let { id, author, body, tags } = quote;
        
        if(body){
            body = body.replace('<br>', ' ');
        }
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
