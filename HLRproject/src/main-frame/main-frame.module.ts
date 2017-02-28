import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainFrameComponent } from './main-frame.component';
//import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';

@NgModule({
  declarations: [
    MainFrameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MainFrameComponent]
})
export class MainFrameModule { }
