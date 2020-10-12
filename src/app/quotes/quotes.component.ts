import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { QuotesService } from './quotes.service';
import { Quote } from './quote';
import { Query } from './search/query';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  constructor(private _quotesService: QuotesService) {}

  quotes: Observable<Quote[]>;

  loadingSubject: BehaviorSubject<boolean>;
  loading = true;
  
  query: Query = {
    text: 'love',
    searchBy: 'text',
  };

  ngOnInit(): void {
    this.quotes = this._quotesService.getQuotes(this.query);
    this.loadingSubject = this._quotesService.isLoading();
    this.loadingSubject.subscribe((val) => (this.loading = val));
  }

  getQuotes(query) {
    this.query = query;
    this.quotes = this._quotesService.getQuotes(this.query);
  }
}
