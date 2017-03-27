//TODO: Delete this file? At least don't import stuff here, it doesn't seem to work

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
