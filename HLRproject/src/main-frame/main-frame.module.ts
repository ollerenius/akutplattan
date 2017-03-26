import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainFrameComponent } from './main-frame.component';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {HeaderComponent} from "../components/header/header.component";
import {routing} from "./main-frame.routes";
import {LogComponent} from "../components/log/log.component";
import {LoggingService} from "../services/logging.service";

@NgModule({
  declarations: [
    MainFrameComponent,
    MainMenuComponent,
    HeaderComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoggingService],
  bootstrap: [MainFrameComponent]
})
export class MainFrameModule {
}
