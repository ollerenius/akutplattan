/**
 * Created by Kim on 2017-03-21.
 */

// These module is not used in the current state since we do not import
// anything into the component at the moment. This module is just created
// in case we want to import something later.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HLRFlowComponent} from "./hlrflow.component";

@NgModule({
  declarations: [
    HLRFlowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HLRFlowComponent]
})
export class HLRFlowModule { }
