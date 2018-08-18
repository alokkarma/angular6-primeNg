import { Component, Input } from '@angular/core';
@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: []
  })
  export class FooterComponent{
    @Input() isOpen: boolean;
    construtor() {
    }
  }