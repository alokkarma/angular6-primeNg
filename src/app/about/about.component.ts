import { Component, OnInit } from '@angular/core';
import {TerminalService} from 'primeng/components/terminal/terminalservice';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [TerminalService]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
