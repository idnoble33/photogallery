import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } 
  from '@angular/platform-browser/animations';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DetailsScreenComponent } from './details-screen/details-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    DetailsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
