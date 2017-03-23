import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {KeyPadComponent} from "../components/keypad/keypad.component";
import {BarnHLRStartComponent} from "../components/barnhlr/barnhlr.component";
import {BarnHLRSettingsComponent} from "../components/barnhlrsettings/barnhlrsettings.component";
import {BarnHLRService} from "../components/barnhlr/barnhlr.service";

@NgModule({
  declarations: [
    AppComponent,
    KeyPadComponent,
    BarnHLRStartComponent,
    BarnHLRSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BarnHLRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
