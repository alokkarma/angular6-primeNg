import { Component, OnInit } from '@angular/core';
import { SuiteService } from './shared/service/suite.services';

const URL = "/suite1/only_suite1/_search";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'App';
  public data ;
  constructor(private suiteService: SuiteService){}

  isSideNavOpen:boolean = true;

  receiveMessage($event) {
    this.isSideNavOpen = $event;
  }

}