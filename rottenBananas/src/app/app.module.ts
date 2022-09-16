import { SearchBoxComponent } from './searchBox.component';
import { MoviesService } from './movies.service';
import { MoviesComponent } from './movies.component';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
// import { MatInputModule } from '@angular/material/input';
// FormsModule

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
