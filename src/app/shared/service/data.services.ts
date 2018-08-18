import { Injectable } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
export class DataService {
    constructor(private http : Http){

    }
    getData(URL:string){
        console.log("inside get suites");
        return this.http.get(URL)
        .pipe(map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        ));
    }
    searchDataById(url:string){
        console.log(url);
        return this.http.get(url)
        .pipe(map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        ));
    }
    postData(url:string, data:any){
        return this.http.post(url, data)
        .pipe(map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        ));
    }

}