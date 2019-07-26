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
  public temDataLength:number = 0;
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  this.cars = CARS;

  this.cars.length < this.rows ? this.temDataLength = this.cars.length : this.temDataLength = this.rows;
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
    console.log(this.expandedRows);
  }
  onRowExpand() {
    console.log("row expanded", Object.keys(this.expandedRows).length);
    if(Object.keys(this.expandedRows).length === this.temDataLength){
      this.isExpanded = true;
    }
    console.log(this.expandedRows);
  }
  onRowCollapse() {
    console.log("row collapsed",Object.keys(this.expandedRows).length);
    if(Object.keys(this.expandedRows).length === 0){
      this.isExpanded = false;
    }
  }
  onPage(event: any) {
    this.temDataLength = this.cars.slice(event.first, event.first + 10).length;
    console.log(this.temDataLength);
    this.isExpanded = false;
    this.expandedRows={};
  }
}
const CARS = [
      {"vin":"a1653d4d","brand":"VW","year":1998,"color":"This is custom","price":10000},
      {"vin":"ddeb9b10","brand":"Mercedes","year":1985,"color":"This is custom read more component for show and hide extra details","price":25000},
      {"vin":"d8ebe413","brand":"Jaguar","year":1979,"color":"This is custom read more component for show and hide extra details","price":30000},
      {"vin":"aab227b7","brand":"Audi","year":1970,"color":"This is custom read more component for show and hide extra details","price":12000},
      {"vin":"631f7412","brand":"Volvo","year":1992,"color":"This is custom read more component for show and hide extra details","price":15500},
      {"vin":"7d2d22b0","brand":"VW","year":1993,"color":"Hello","price":40000},
      {"vin":"50e900ca","brand":"Fiat","year":1964,"color":"This is custom read more component for show and hide extra details","price":25000},
      {"vin":"4bbcd603","brand":"Renault","year":1983,"color":"This is custom read more component for show and hide extra details","price":22000},
      {"vin":"70214c7e","brand":"Renault","year":1961,"color":"This is custom read more component for show and hide extra details","price":19000},
      {"vin":"ec229a92","brand":"Audi","year":1984,"color":"This is custom read more component for show and hide extra details","price":36000},
      {"vin":"1083ee40","brand":"VW","year":1984,"color":"This is custom read more component for show and hide extra details","price":215000},
      {"vin":"6e0da3ab","brand":"Volvo","year":1987,"color":"This is custom read more component for show and hide extra details","price":32000},
      {"vin":"5aee636b","brand":"Jaguar","year":1995,"color":"This is custom read more component for show and hide extra details","price":20000},
      {"vin":"7cc43997","brand":"Jaguar","year":1984,"color":"This is custom read more component for show and hide extra details","price":14000},
      {"vin":"88ec9f66","brand":"Honda","year":1989,"color":"This is custom read more component for show and hide extra details","price":36000},
      {"vin":"f5a4a5f5","brand":"BMW","year":1986,"color":"Blue","This is custom read more component for show and hide extra details":28000},
      {"vin":"15b9a5c9","brand":"Mercedes","year":1986,"color":"Orange","price":14000},
      {"vin":"f7e18d01","brand":"Mercedes","year":1991,"color":"White","price":25000},
      {"vin":"cec593d7","brand":"VW","year":1992,"color":"Blue","price":36000}
  ];

