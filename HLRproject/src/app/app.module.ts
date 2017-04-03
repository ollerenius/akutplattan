import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {HeaderComponent} from "../components/header/header.component";
import {routing} from "./app.routes";
import {HLRModule} from "../components/hlr/hlr.module";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HLRModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
