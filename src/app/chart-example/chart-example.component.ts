import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
    selector: 'app-chart-example',
    templateUrl: './chart-example.component.html',
    styleUrls: ['./chart-example.component.scss']
})
export class ChartExampleComponent implements OnInit {
    @ViewChild('ck') ck : CheckboxModule;
    items: any;
    index: any;
    data: any;
    option1: any;
    value: Date;
    checked2: boolean = true;
    selectedValue: string;
    selectedCities: string[] = [];
    chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Linechart'
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Line 1',
            data: [1, 2, 3,1,8,9,10,1,2,3,4,5,6,7,8,9,
                1, 2, 3,1,8,9,10,1,2,3,4,5,6,7,8,9]
          }
        ]
      });
     
      // add point to chart serie
      add() {
          for(var i=0; i<10;i++)
          {
        this.chart.addPoint(i);
          }
      }
    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 150],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    }
    ngOnInit() {
        this.option1 = {
            title: {
                display: true,
                text: 'Custom Chart Title',
                position: 'left'
            },
            scales: {
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        show: true,
                        labelString: 'Value',


                    },
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                        min: 0,
                    }
                }],
                xAxes: [{
                    categoryPercentage: 1,
                    barPercentage: 1,
                    ticks: {
                        display: false,
                        beginAtZero: 0
                    }
                }]
            }
        }
        this.items = [{
            header: "ABV",
            content: "ASD"

        },
        {
            header: "Bbbb",
            content: "BCD"

        }]
    }
    handleChange(e: any) {
        console.log(e.checked);
        this.items.push({
            header: "New",
            content: "New Content"

        });
        setTimeout(() => {
            this.index = this.items.length - 1;
        }, 100);
    }
    selectData(e:any){
        console.log(e.dataset);
        console.log(e.element);
        console.log(e.element._datasetIndex);
        console.log(e.element._index);
    }
    checkChange(e:any){
        event.stopPropagation();
    }
}
