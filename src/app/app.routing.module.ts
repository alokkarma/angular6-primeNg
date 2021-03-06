import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ChartExampleComponent } from "./chart-example/chart-example.component";
import { PrimeTableComponent } from "./prime-table/prime-table.component";
const appRoutes: Routes =[
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'table', component: PrimeTableComponent },
    { path: 'about', component: AboutComponent },
    { path: 'chart', component: ChartExampleComponent }
];

@NgModule({
 imports: [
     RouterModule.forRoot(appRoutes)
 ],
 exports: [RouterModule]
})
export class AppRoutingModule{

}