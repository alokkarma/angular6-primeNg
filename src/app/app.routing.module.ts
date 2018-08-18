import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { SuiteComponent } from "./suite/all_suite.component";
import { HomeComponent } from "./home/home.component";
import { SearchSuiteComponent } from "./suite/search_suite/search_suite.component";
import { AllTestComponent } from "./test/all-test/all-test.component";
import { SearchTestComponent } from "./test/search-test/search-test.component";
import { SummaryComponent } from "./summary-module/summary/summary.component";
const appRoutes: Routes =[
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: HomeComponent },
    { path: 'allSuites', component: SuiteComponent },
    { path: 'searchSuite', component: SearchSuiteComponent },
    { path: 'allTests', component: AllTestComponent },
    { path: 'searchTest', component: SearchTestComponent },
    { path: 'summary', component: SummaryComponent }
];

@NgModule({
 imports: [
     RouterModule.forRoot(appRoutes)
 ],
 exports: [RouterModule]
})
export class AppRoutingModule{

}