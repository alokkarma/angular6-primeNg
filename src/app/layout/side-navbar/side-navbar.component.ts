import { Component, Input } from '@angular/core';
@Component({
    selector: 'side-navbar-component',
    templateUrl: './side-navbar.component.html',
    styleUrls: []
  })
  export class SideNavbarComponent{
        @Input() isOpen: boolean;
  }