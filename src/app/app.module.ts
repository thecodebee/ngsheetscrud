import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SheetsModule } from './sheets/sheets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SheetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
