import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HLRComponent} from "./hlr.component";
import {ChecklistComponent } from "./checklist/checklist.component"
import {HLRFlowComponent} from "./hlrflow/hlrflow.component";
import { PopoverModule } from 'ng2-bootstrap/popover';

@NgModule({
  declarations: [
    HLRComponent,
    ChecklistComponent,
    HLRFlowComponent
  ],
  imports: [
    PopoverModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HLRComponent, ChecklistComponent, HLRFlowComponent]
})
export class HLRModule { }
