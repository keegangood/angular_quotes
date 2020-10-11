import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  constructor(private _quotesService: QuotesService) {}

  quotes: any;

  ngOnInit(): void {
    this.quotes = this._quotesService.getQuotes();
    console.log(this.quotes);
  }
}
