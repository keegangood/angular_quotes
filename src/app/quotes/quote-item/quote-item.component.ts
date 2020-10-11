import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.scss'],
})
export class QuoteItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() quote: Quote;
}
