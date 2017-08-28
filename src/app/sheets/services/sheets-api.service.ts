import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers } from "@angular/http";

import { SheetsConfig } from '../config/SheetsConfig';
import { UserService } from './user.service';
import { Student } from "../model/student";

@Injectable()
export class SheetsApiService {

  //GET_VALUES = https://sheets.googleapis.com/v4/spreadsheets/1D4LfH5bF3_Iq0CIKW4Yqco9BLHUpAEZ0sWAvW4zBFTE/values/Class!A2%3AE?key={YOUR_API_KEY}
  //GET SHEET = https://sheets.googleapis.com/v4/spreadsheets/1D4LfH5bF3_Iq0CIKW4Yqco9BLHUpAEZ0sWAvW4zBFTE?key={YOUR_API_KEY}


  private readonly SHEET_ID: string = "1_EMnwNdbmrezzV69bKQ3SMkCDZaBlvMf2bZOogMz3Q0";
  private readonly SHEET_RANGE: string = "Class!A2:E";
  private readonly CREATE_SHEET_ENDPOINT_URL: string = SheetsConfig.GET_SHEET_URL + '?key=' + SheetsConfig.API_KEY;
  private readonly READ_SHEET_ENDPOINT_URL: string = SheetsConfig.GET_SHEET_URL + '/' + this.SHEET_ID + '/values/' + this.SHEET_RANGE ; //+ '?key=' + SheetsConfig.API_KEY;
  private authHeader: Headers = new Headers();


  constructor(private http: Http, private userService: UserService) {
  }

  createSheet(): Observable<any> {
    console.log("createSheet token == ", this.userService.getToken());
    console.log("CREATE_SHEET_ENDPOINT_URL ", this.CREATE_SHEET_ENDPOINT_URL);
    
    this.authHeader.append('Authorization', 'Bearer ' + this.userService.getToken());
    return this.http
      .post(this.CREATE_SHEET_ENDPOINT_URL, {headers: this.authHeader})
      .map((response: Response) => {
        console.log("createSheet response == ", response);
        response.json()}
      );
  }

  getSheet(): Observable<Student[]> {
    this.authHeader.append('Authorization', 'Bearer ' + this.userService.getToken());
    return this.http
      .get(this.READ_SHEET_ENDPOINT_URL, {headers: this.authHeader})
      .map((response: Response) => response.json().values);
  }

}
