import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PopoverModule } from 'ng2-bootstrap/popover';

import {HLRComponent} from "./hlr.component";
import {ChecklistComponent } from "./checklist/checklist.component"
import {HLRFlowComponent} from "./hlrflow/hlrflow.component";
import { PopoverAnalysisComponent } from './popover_analysis/popover_analysis.component';
import { PopoverMedicineComponent } from './popover_medicine/popover_medicine.component';

@NgModule({
  declarations: [
    HLRComponent,
    ChecklistComponent,
    PopoverAnalysisComponent,
    PopoverMedicineComponent,
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
