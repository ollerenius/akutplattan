import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {HeaderComponent} from "../components/header/header.component";
import {LogComponent} from "../components/log/log.component";
import {LoggingService} from "../services/logging.service";
import {routing} from "./app.routes";
import {HLRModule} from "../components/hlr/hlr.module";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    LogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HLRModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
