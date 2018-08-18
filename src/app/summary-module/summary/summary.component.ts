import { Component, OnInit, ViewChild } from '@angular/core';
import { SuiteService } from '../../shared/service/suite.services';
import { UIChart } from '../../../../node_modules/primeng/chart';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @ViewChild("chart") chart: UIChart;
  public loading: boolean =  false;
  public data:any;
  public data2:any;
  public data3:any;
  public data4:any;
  public data5:any;
  public data6:any;
  public data7:any;
  public data8:any;
  options: any;
  options1: any;
    public summaryData = {
      "size": 0,
      "query": {
        "query_string": {
          "query": "*",
          "analyze_wildcard": true,
          "lowercase_expanded_terms": false
        }
      },
      "aggs": {
        "summaryDetail": {
          "terms": {
            "field": "USER",
            "size": 10,
            "order": {
              "_count": "desc"
            }
          }
        }
      }
    };    
    constructor(private suiteService: SuiteService){
    }
    ngOnInit() {
       this.fecthSummaryDetailsByUser();
       this.fecthSummaryDetailsByName();
       this.fecthSummaryDetailsBySite();
       this.fecthTestDetailsByOwner();
       this.fecthTestDetailsByPlatForm();
       this.fecthTestDetailsByOS();
       this.fecthTaskDetailsByStatus();
       this.fecthTaskDetailsByPlatfrom();
       this.options = {
        title: {
            display: true,
            text: 'SUITE BY SITE',
            fontSize: 12
        },
        legend: {
            position: 'bottom'
        }
    };
    this.options1 = {
        title: {
            display: true,
            text: 'STATUS',
            fontSize: 12
        },
        legend: {
            position: 'bottom'
        }
    };
}
 fecthSummaryDetailsByUser(){
     
      this.suiteService.getSummaryResult('/rsh_suite/suite/_search', this.summaryData)
      .subscribe((response: any[]) => {
                 var userCountData = response['aggregations']['summaryDetail']['buckets'];
                 this.makeGraphData(userCountData, "USER");
                 this.loading = false;
          },
          (error) => {this.loading = false;}
      );
    }
    fecthSummaryDetailsByName(){
     this.summaryData["aggs"]["summaryDetail"]["terms"]["field"] = "SUITE_NAME"
      this.suiteService.getSummaryResult('/rsh_suite/suite/_search', this.summaryData)
      .subscribe((response: any[]) => {
                 var suiteData = response['aggregations']['summaryDetail']['buckets'];
                 this.makeGraphData(suiteData,"SUITE_NAME");
                 this.loading = false;
          },
          (error) => {this.loading = false;}
      );
}
fecthSummaryDetailsBySite()  {
    this.summaryData["aggs"]["summaryDetail"]["terms"]["field"] = "SITE"
    this.suiteService.getSummaryResult('/rsh_suite/suite/_search', this.summaryData)
     .subscribe((response: any[]) => {
                var siteData = response['aggregations']['summaryDetail']['buckets'];
                this.makeGraphData(siteData, "SITE");
                this.loading = false;
         },
         (error) => {this.loading = false;}
     );
}  
fecthTestDetailsByOwner() {
    this.summaryData["aggs"]["summaryDetail"]["terms"]["field"] = "TEST_OWNER"
    this.suiteService.getSummaryResult('/rsh_test/test/_search', this.summaryData)
     .subscribe((response: any[]) => {
                var ownerData = response['aggregations']['summaryDetail']['buckets'];
                this.makeGraphData(ownerData, "OWNER");
                this.loading = false;
         },
         (error) => {this.loading = false;}
     );
}
fecthTestDetailsByPlatForm() {
    this.summaryData["aggs"]["summaryDetail"]["terms"]["field"] = "PLATFORM"
    this.suiteService.getSummaryResult('/rsh_test/test/_search', this.summaryData)
     .subscribe((response: any[]) => {
                var platFormData = response['aggregations']['summaryDetail']['buckets'];
                this.makeGraphData(platFormData, "PLATFORM");
                this.loading = false;
         },
         (error) => {this.loading = false;}
     );
}
fecthTestDetailsByOS() {
    this.summaryData["aggs"]["summaryDetail"]["terms"]["field"] = "TEST_STATUS"
    this.suiteService.getSummaryResult('/rsh_test/test/_search', this.summaryData)
     .subscribe((response: any[]) => {
                var osData = response['aggregations']['summaryDetail']['buckets'];
                this.makeGraphData(osData, "STATUS");
                this.loading = false;
         },
         (error) => {this.loading = false;}
     );
}
fecthTaskDetailsByPlatfrom() {
    this.summaryData["aggs"]["summaryDetail"]["terms"]["field"] = "TASK_PLATFORM"
    this.suiteService.getSummaryResult('/rsh_task/task/_search', this.summaryData)
     .subscribe((response: any[]) => {
                var osData = response['aggregations']['summaryDetail']['buckets'];
                console.log(osData);
                this.makeGraphData(osData, "TASK_PLATFORM");
                this.loading = false;
         },
         (error) => {this.loading = false;}
     );
}
fecthTaskDetailsByStatus() {
    this.summaryData["aggs"]["summaryDetail"]["terms"]["field"] = "TASK_STATUS"
    this.suiteService.getSummaryResult('/rsh_task/task/_search', this.summaryData)
     .subscribe((response: any[]) => {
                var osData = response['aggregations']['summaryDetail']['buckets'];
                console.log(osData);
                this.makeGraphData(osData, "TASK_STATUS");
                this.loading = false;
         },
         (error) => {this.loading = false;}
     );
}
makeGraphData(data:any, dataType: string){
      var count=[];
      var key=[];
        data.forEach(element => {
                key.push(element.key);
          count.push(element.doc_count);
        });
        switch(dataType) {
            case "USER":
            this.data = {
                labels: key,
                datasets: [
                  {
                      label: 'SUITE BY USER',
                      backgroundColor: '#49a7c1',
                      borderColor: '#1E88E5',
                      data: count
                 }
              ]
            };
            break;
           case "SUITE_NAME":
           this.data3 = {
            labels: key,
            datasets: [
                {
                    label: 'SUITE BY NAME',
                    data: count,
                    fill: false,
                    borderColor: '#007bff'
                }
            ]
        } 
        break;
        case "SITE":
        this.data2= {
            labels: key,
            datasets: [
                {
                    data: count,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
        break;
        case "OWNER":
        this.data4 = {
            labels: key,
            datasets: [
              {
                  label: 'TEST BY OWNER',
                  backgroundColor: '#49a7c1',
                  borderColor: '#1E88E5',
                  data: count
             }
          ]
        };
        break;
       case "PLATFORM":
       this.data5 = {
        labels: key,
        datasets: [
            {
                label: 'TEST BY PLATFORM',
                data: count,
                fill: false,
                borderColor: '#007bff'
            }
        ]
    } 
    break;
    case "STATUS":
    this.data6= {
        labels: key,
        datasets: [
            {
                data: count,
                backgroundColor: [
                    "#20c997",
                    "#36A2EB",
                    "#FF6384",
                    "#6610f2",
                    "#FFCE56"
                ]
            }]    
        };
    break;
    case "TASK_PLATFORM":
    this.data7= {
        labels: key,
        datasets: [
          {
              label: 'COUNT BY PLATFORM',
              backgroundColor: '#49a7c1',
              borderColor: '#1E88E5',
              data: count
         }
      ]
    };
    break;  
    case "TASK_STATUS":
    this.data8= {
        labels: key,
        datasets: [
            {
                data: count,
                backgroundColor: [
                    "#20c997",
                    "#36A2EB",
                    "#FF6384",
                    "#6610f2",
                    "#FFCE56"
                ]
            }]    
        };
    break;        
    } // end of case

  }
    
}
