import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteItemComponent } from './quotes/quote-item/quote-item.component';
import { SearchComponent } from './quotes/search/search.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SpinnerComponent } from './layout/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, QuotesComponent, QuoteItemComponent, SearchComponent, NavbarComponent, AboutComponent, HomeComponent, SpinnerComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
