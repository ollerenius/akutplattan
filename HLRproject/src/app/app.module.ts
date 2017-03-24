import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {HeaderComponent} from "../components/header/header.component";
import {routing} from "./app.routes";
import {BarnHLRStartComponent} from "../components/barnhlr/barnhlr.component";
import {BarnHLRSettingsComponent} from "../components/barnhlrsettings/barnhlrsettings.component";
import {BarnHLRService} from "../components/barnhlr/barnhlr.service";
import {KeyPadComponent} from "../components/keypad/keypad.component";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    KeyPadComponent,
    BarnHLRStartComponent,
    BarnHLRSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BarnHLRService],
  bootstrap: [AppComponent]
})
export class MainFrameModule {
}
