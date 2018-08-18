import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'HomeComponent',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent{
    constructor(private router: Router){}
    
    login() {
        console.log("Inisde login");
        this.router.navigateByUrl('/summary');
    }
}