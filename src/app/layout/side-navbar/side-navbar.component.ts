import { Component, Input } from '@angular/core';

export const ROUTES= [
      { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
      { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
      { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
      { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
      { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' }
  ];
@Component({
    selector: 'side-navbar-component',
    templateUrl: './side-navbar.component.html',
    styleUrls: []
  })
  export class SideNavbarComponent{
        @Input() isOpen: boolean;
        public menuItems:any;
        hueGroups:any;
        ngOnInit(){
            this.menuItems = ROUTES.filter(menuItem => menuItem);
            this.hueGroups = [{
                  name: "group 1",
                  lights: [{
                    name: "light 1"
                  },{
                    name: "light 2"
                  }]
                },
                {
                  name: "group 2",
                  lights: [{
                    name: "light 3"
                  },{
                    name: "light 4"
                  }]
                }];
        }
  }