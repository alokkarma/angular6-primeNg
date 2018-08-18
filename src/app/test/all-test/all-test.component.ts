import { Component  } from '@angular/core';
import { SuiteService } from '../../shared/service/suite.services';
const URL = "/rsh_test/test/_search?size=100";
@Component({
    selector: 'all-test-component',
    templateUrl: './all-test.component.html',
    styleUrls: []
  })
  export class AllTestComponent{
      public data ;
      public loading: boolean =  false;
      constructor(private suiteService: SuiteService){

      }
      ngOnInit() {
        this.fecthdata(URL);
      }
      fecthdata(url:string){
        this.loading = true;
        this.suiteService.getSuites(url)
        .subscribe((response: any[]) => {
                   this.data = response;
                   console.log(this.data);
                   this.loading = false;
            },
            (error) => console.log(error)
        );
      }
  }