import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { ButtonsModule } from 'ng2-bootstrap/buttons';

import {HLRFlowComponent} from "./hlrflow.component";

import { PopoverAnalysisComponent } from './popover_analysis/popover_analysis.component';
import { PopoverMedicineComponent } from './popover_medicine/popover_medicine.component';
import {HeartmassagetextComponent} from './heartmassagetext/heartmassagetext.component'

@NgModule({
  declarations: [
    HLRFlowComponent,
    PopoverAnalysisComponent,
    PopoverMedicineComponent,
    HeartmassagetextComponent
  ],
  imports: [
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HLRFlowComponent, PopoverAnalysisComponent, PopoverMedicineComponent, HeartmassagetextComponent]
})
export class HLRFlowModule { }
