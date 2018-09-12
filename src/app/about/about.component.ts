import { Component, OnInit } from '@angular/core';
import {TerminalService} from 'primeng/components/terminal/terminalservice';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [TerminalService]
})
export class AboutComponent implements OnInit {

   text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    
    text2: string;
  constructor() { }

  ngOnInit() {
  }

}
