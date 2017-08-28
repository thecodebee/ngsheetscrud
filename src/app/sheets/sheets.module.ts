import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ClientConfig, GoogleApiModule, NG_GAPI_CONFIG } from "ng-gapi";
import { UserService } from "./services/user.service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SheetsApiService } from "./services/sheets-api.service";
import { SheetComponent } from './components/sheet/sheet.component';

//TODO: Add your CLIENT_ID
//Auth scopes held:
//drive, drive.file, drive.readonly, spreadsheets, spreadsheets.readonly

let gapiClientConfig: ClientConfig = {
  clientId: "309004317560-i358qjhv53t471h1qocdn1ppnrjcvoal.apps.googleusercontent.com",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: [
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets.readonly",
      "https://www.googleapis.com/auth/drive.readonly",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/spreadsheets"
  ].join(" ")
};

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  declarations: [DashboardComponent, LoginComponent, SheetComponent],
  providers: [
    UserService,
    SheetsApiService
  ],
  exports: [
    DashboardComponent
  ]
})
export class SheetsModule { }
