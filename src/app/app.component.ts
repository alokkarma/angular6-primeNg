import { Component, OnInit } from '@angular/core';

const URL = "/suite1/only_suite1/_search";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'App';
  public data ;
  constructor(){}

  isSideNavOpen:boolean = true;

  receiveMessage($event) {
    this.isSideNavOpen = $event;
  }

}