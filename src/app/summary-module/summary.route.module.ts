import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

const summaryRoutes: Routes =[
];

@NgModule({
 imports: [
     RouterModule.forChild(summaryRoutes)
 ],
 exports: [RouterModule]
})
export class SummaryRoutingModule{

}