import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ShowHideContainer } from './show-hide-container'
import {ShowHideInput} from './show-hide-input'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ShowHideContainer, ShowHideInput ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
