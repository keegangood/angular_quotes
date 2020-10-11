import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuotesService } from './quotes.service';
import { Quote } from './quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  constructor(private _quotesService: QuotesService) {}

  quotes: Observable<Quote[]>;

  ngOnInit(): void {
    this.quotes = this._quotesService.getQuotes();
  }
}
