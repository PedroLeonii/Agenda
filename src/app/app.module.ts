import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContattoComponent } from './contatto.component/contatto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , ContattoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

