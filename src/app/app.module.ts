import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SideNavbarComponent,
    ExpandMenu,
    AboutComponent
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
    CardModule,
    TerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
