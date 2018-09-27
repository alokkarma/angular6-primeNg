import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.scss']
})
export class ChartExampleComponent implements OnInit {
  items: any;
  index:any;
  data: any;
  option1: any;
  checked2: boolean = true;  
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
    this.option1= {
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
              beginAtZero:true,
              max: 100,
              min: 0,
            }
					}],
		  xAxes: [{
            categoryPercentage:1,
            barPercentage:1,
            ticks: {
                display:false,
                beginAtZero:0
            }
        }]
      }
  }
  this.items=[{
      header:"ABV",
      content:"ASD"

  },
  {
    header:"Bbbb",
    content:"BCD"

}]
  }
  handleChange(e: any){
    console.log(e.checked);
    this.items.push({
        header:"New",
        content:"New Content"
    
    });
      setTimeout(()=>{  
        this.index = this.items.length - 1;
   }, 100);
  }

}
