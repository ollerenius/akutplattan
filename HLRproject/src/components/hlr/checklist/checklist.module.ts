/**
 * Created by Kim on 2017-03-21.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ChecklistComponent} from "./checklist.component";

@NgModule({
  declarations: [
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ChecklistComponent]
})
export class ChecklistModule { }
