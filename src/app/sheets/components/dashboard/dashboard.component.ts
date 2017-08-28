import { SheetsApiService } from './../../services/sheets-api.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Observable } from "rxjs/Observable";
import { Student } from "../../model/student";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  students: Student[];
  loading: boolean;

  constructor(private userService:UserService, private sheetsApiService:SheetsApiService) { }

  ngOnInit() {
  }

  public isSignedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  createSheet() {
    this.sheetsApiService
      .createSheet()
      .subscribe();
  }

  getSheet() {
    this.loading = true;
    this.sheetsApiService
      .getSheet()
      .subscribe((data: Student[]) => {
        this.students = data;
        this.loading = false;
      });
  }
}
