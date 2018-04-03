import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app.routing-module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header-component';
import { FooterComponent } from './components/footer/footer-component';
import { NotFoundView } from './views/not-found/not-found-view';
import { HomeView } from './views/home/home-view';
import { SoftwareView } from './views/software/software-view';
import { ContactView } from './views/contact/contact-view';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundView,
    HomeView,
    SoftwareView,
    ContactView
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
