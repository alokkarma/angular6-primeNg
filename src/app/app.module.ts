import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SuiteComponent } from './suite/all_suite.component';
import { HeaderComponent } from './layout/header/header.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { HomeComponent } from './home/home.component';
import { SearchSuiteComponent } from './suite/search_suite/search_suite.component';
import { AllTestComponent } from './test/all-test/all-test.component';
import { SearchTestComponent } from './test/search-test/search-test.component';
import { SummaryModule } from './summary-module/summary.module';
import { SummaryComponent } from './summary-module/summary/summary.component';
import { ExpandMenu } from './shared/directive/expand-menu.directive';
import { ChartModule } from 'primeng/chart';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    SuiteComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SideNavbarComponent,
    SearchSuiteComponent,
    AllTestComponent,
    SearchTestComponent,
    ExpandMenu,
    SummaryComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    ButtonModule,
    TableModule,
    ChartModule,
    ScrollPanelModule,
    ProgressBarModule,
    AppRoutingModule,
    SummaryModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
