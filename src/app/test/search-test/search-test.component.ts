import { Component, Output, EventEmitter  } from '@angular/core';
import { SuiteService } from '../../shared/service/suite.services';

const URL = "/rsh_test/test/_search?q=_id:";
@Component({
    selector: 'search-test-component',
    templateUrl: './search-test.component.html',
    styleUrls: []
  })
  export class SearchTestComponent{
    public testKey: string;
    public loading: boolean= false;
    private data: any = {};
    constructor(private suiteService: SuiteService){}

    searchTest(key: string){
      console.log("Inside test", URL+key.trim());
      this.loading = true;
      this.suiteService.searchSuiteById(URL+key.trim())
      .subscribe((response: any[]) => {
                 this.data = response['hits']['hits'][0];
                 console.log(this.data);
                 this.loading = false;
          },
          (error) => console.log(error)
      );
    }

  }