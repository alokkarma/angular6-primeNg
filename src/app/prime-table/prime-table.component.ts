import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.scss']
})
export class PrimeTableComponent implements OnInit {
  public cars:any[];
  public cols: any[];
  public isExpanded:boolean = false;
  public rows:number =10;
  public expandedRows = {};
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  this.cars = CARS;
  }
  expandAll() {
    if(!this.isExpanded){
      this.cars.forEach(data =>{
        this.expandedRows[data.vin] = 1;
      })
    } else {
      this.expandedRows={};
    }
    this.isExpanded = !this.isExpanded;
  }
  onRowExpand() {
    console.log("row expanded", Object.keys(this.expandedRows).length);
    if(Object.keys(this.expandedRows).length === this.rows){
      this.isExpanded = true;
    }
  }
  onRowCollapse() {
    console.log("row collapsed",Object.keys(this.expandedRows).length);
    if(Object.keys(this.expandedRows).length === 0){
      this.isExpanded = false;
    }
  }
  onPage(event: any) {
    console.log(event);
    this.isExpanded = false;
    this.expandedRows={};
  }
}
const CARS = [
      {"vin":"a1653d4d","brand":"VW","year":1998,"color":"White","price":10000},
      {"vin":"ddeb9b10","brand":"Mercedes","year":1985,"color":"Green","price":25000},
      {"vin":"d8ebe413","brand":"Jaguar","year":1979,"color":"Silver","price":30000},
      {"vin":"aab227b7","brand":"Audi","year":1970,"color":"Black","price":12000},
      {"vin":"631f7412","brand":"Volvo","year":1992,"color":"Red","price":15500},
      {"vin":"7d2d22b0","brand":"VW","year":1993,"color":"Maroon","price":40000},
      {"vin":"50e900ca","brand":"Fiat","year":1964,"color":"Blue","price":25000},
      {"vin":"4bbcd603","brand":"Renault","year":1983,"color":"Maroon","price":22000},
      {"vin":"70214c7e","brand":"Renault","year":1961,"color":"Black","price":19000},
      {"vin":"ec229a92","brand":"Audi","year":1984,"color":"Brown","price":36000},
      {"vin":"1083ee40","brand":"VW","year":1984,"color":"Silver","price":215000},
      {"vin":"6e0da3ab","brand":"Volvo","year":1987,"color":"Silver","price":32000},
      {"vin":"5aee636b","brand":"Jaguar","year":1995,"color":"Maroon","price":20000},
      {"vin":"7cc43997","brand":"Jaguar","year":1984,"color":"Orange","price":14000},
      {"vin":"88ec9f66","brand":"Honda","year":1989,"color":"Maroon","price":36000},
      {"vin":"f5a4a5f5","brand":"BMW","year":1986,"color":"Blue","price":28000},
      {"vin":"15b9a5c9","brand":"Mercedes","year":1986,"color":"Orange","price":14000},
      {"vin":"f7e18d01","brand":"Mercedes","year":1991,"color":"White","price":25000},
      {"vin":"cec593d7","brand":"VW","year":1992,"color":"Blue","price":36000}
  ];

