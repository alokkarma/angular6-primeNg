import { Component } from '@angular/core';
import { SuiteService } from '../../shared/service/suite.services';
const URL = '/rsh_suite/suite/_search?q=_id:';
@Component({
    selector: 'SearchSuiteComponent',
    templateUrl: './search_suite.component.html',
    styleUrls: []
})
export class SearchSuiteComponent{
    public suiteKey: string;
    public loading: boolean= false;
    private data: any = {};
    constructor(private suiteService: SuiteService){}
    searchSuite(suitekey: string){
        this.searchSuiteById(URL+(suitekey).trim());
    }
    searchSuiteById(url: string){
      this.loading = true;
      this.suiteService.searchSuiteById(url)
      .subscribe((response: any[]) => {
                 this.data = response['hits']['hits'][0];
                 console.log(this.data);
                 this.loading = false;
          },
          (error) => console.log(error)
      );
    }
}