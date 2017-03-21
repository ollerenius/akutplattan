import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HLRComponent} from "./hlr.component";
import {ChecklistComponent } from "./checklist/checklist.component"

@NgModule({
  declarations: [
    HLRComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HLRComponent, ChecklistComponent]
})
export class HLRModule { }
