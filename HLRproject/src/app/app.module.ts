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
import {BarnHLRSettingsComponent} from "../components/barnhlrsettings/barnhlrsettings.component";
import {BarnHLRStartComponent} from "../components/barnhlr/barnhlr.component";
import {BarnHLRService} from "../services/barnhlr.service";
import {KeyPadComponent} from "../components/keypad/keypad.component";
import {HLRModule} from "../components/hlr/hlr.module";
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import {HLRDosageService} from "../services/hlrdosage.service";
import { RespiratoryArrestComponent } from '../components/respiratoryarrest/respiratoryarrest.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    BarnHLRSettingsComponent,
    BarnHLRStartComponent,
    KeyPadComponent,
    HeaderComponent,
    LogComponent,
    RespiratoryArrestComponent]
  ,
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),
    routing,
    HLRModule
  ],
  providers: [BarnHLRService, LoggingService, HLRDosageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
