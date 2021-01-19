import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
