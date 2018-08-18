import { Component } from '@angular/core';
import { SuiteService } from '../shared/service/suite.services';


const URL = "/rsh_suite/suite/_search?size=100";
@Component({
    selector: 'suite',
    templateUrl: './all_suite.component.html',
    styleUrls: []
  })
  export class SuiteComponent{
    public data ;
    public loading: boolean =  false;
    public summaryData = {
      "_source": true,
      "query": {
      "match": {
      "USER": "mirkis" 
        }
       }
    }
    constructor(private suiteService: SuiteService){
    }
    ngOnInit() {
      this.fecthdata(URL);
      this.fecthSummaryDetails();
       
    }
    fecthdata(url:string){
      this.loading = true;
      this.suiteService.getSuites(url)
      .subscribe((response: any[]) => {
                 this.data = response;
                 this.loading = false;
          },
          (error) => {
            this.loading = false;
            console.log("error");
            console.log(error.statusText)}
      );
    }
    clickedOntable(e:any) {
      console.log(e.target.cellIndex);
    }
    fecthSuiteCountByDay(url: string){
        
    }
    fecthSummaryDetails(){
      console.log("inside fetch summary details component");
      this.suiteService.getSummaryResult('/rsh_suite/suite/_search?size=10000', this.summaryData)
      .subscribe((response: any[]) => {
                 console.log(response);
                 this.loading = false;
          },
          (error) => {
            this.loading = false;
            console.log("error");
            console.log(error.statusText)}
      );
    }
  }