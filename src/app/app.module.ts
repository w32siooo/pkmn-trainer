import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokelistChildComponent } from './pokelist-child/pokelist-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokelistComponent,
    PokelistChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
