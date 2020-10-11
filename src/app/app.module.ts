import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteItemComponent } from './quotes/quote-item/quote-item.component';
import { SearchComponent } from './quotes/search/search.component';

@NgModule({
  declarations: [AppComponent, QuotesComponent, QuoteItemComponent, SearchComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
