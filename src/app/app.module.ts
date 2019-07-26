import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './layout/header/header.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { HomeComponent } from './home/home.component';
import { ExpandMenu } from './shared/directive/expand-menu.directive';
import { ChartModule } from 'primeng/chart';
import {CardModule} from 'primeng/card';
import { AboutComponent } from './about/about.component';
import {TerminalModule} from 'primeng/terminal';
import {EditorModule} from 'primeng/editor';
import { ChartExampleComponent } from './chart-example/chart-example.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ScheduleModule} from 'primeng/schedule';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {RadioButtonModule} from 'primeng/radiobutton';
//import { ChartModule } from 'angular-highcharts';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import { PrimeTableComponent } from './prime-table/prime-table.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { NgaReadMoreModule } from 'nga-read-more';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SideNavbarComponent,
    ExpandMenu,
    AboutComponent,
    ChartExampleComponent,
    PrimeTableComponent,
    ReadMoreComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    ChartModule,
    ScrollPanelModule,
    ProgressBarModule,
    AppRoutingModule,
    CardModule,
    TerminalModule,
    EditorModule,
    InputSwitchModule,
    ScheduleModule,
    TabViewModule,
    NgaReadMoreModule,
    AccordionModule,
    RadioButtonModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
