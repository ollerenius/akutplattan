import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PopoverModule } from 'ng2-bootstrap/popover';

import {HLRComponent} from "./hlr.component";
import {ChecklistComponent } from "./checklist/checklist.component"
import {HLRFlowComponent} from "./hlrflow/hlrflow.component";
import { PopoverAnalysisComponent } from './popover_analysis/popover_analysis.component';

@NgModule({
  declarations: [
    HLRComponent,
    ChecklistComponent,
    PopoverAnalysisComponent,
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
