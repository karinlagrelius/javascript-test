import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './searchBox.component';
import { MoviesService } from './movies.service';
import { MoviesComponent } from './movies.component';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
