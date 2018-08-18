import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: []
  })
  export class HeaderComponent{
    isOpen: boolean = true;
    @Output() messageEvent = new EventEmitter<boolean>();
    clickOnArrow(){
      console.log("Inside click");
      this.isOpen = !this.isOpen;
      this.messageEvent.emit(this.isOpen);
    }
  }
