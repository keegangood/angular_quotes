import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Query } from './query';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchOptions: Array<string> = ['text', 'author', 'tag'];

  @Input() query: Query;

  @Output() public searchQuery = new EventEmitter();

  updateQuery() {
    this.searchQuery.emit(this.query);
  }

}
