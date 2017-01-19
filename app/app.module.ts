import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { RouterModule, Routes } from '@angular/router';
import { appRouterProviders } from './app.router';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, HomeComponent],
  bootstrap:    [ AppComponent, appRouterProviders]
})
export class AppModule { }
