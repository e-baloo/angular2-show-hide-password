import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ShowHideContainer } from './show-hide-container'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ShowHideContainer ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
