import { Component, OnInit, ViewChild } from '@angular/core';
import {TerminalService} from 'primeng/components/terminal/terminalservice';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [TerminalService]
})
export class AboutComponent implements OnInit {
  @ViewChild('ed') ed: EditorModule ;
   text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    cars:any;
    text2: string;
    user: FormGroup;
    cols: any;
    tab = { 
          key:9,
          handler: function() {
              return false;
          }
    };
    selectedCities: string[] = [];
  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl(''),
      account: new FormGroup({
        email: new FormControl(''),
        confirm: new FormControl('')
      })
    });

    this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'},
  ];
  this.cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];
  }
  userclick(e:any){
    let element = e.tableViewChild.nativeElement.children[2].children;
    for(let key in element){
        (element[key].classList).remove('ui-state-highlight');
    }
  }
  checkChange(e:any, ev:any){
    console.log(ev);
    console.log(this.selectedCities);
    console.log(this.ed['quill']);
  }
  editorcall(event:any){
    event.editor.keyboard.bindings[9].length = 0;
    event.editor.keyboard.bindings[9].push(this.tab);
  }
}