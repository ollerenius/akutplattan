import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { ButtonsModule } from 'ng2-bootstrap/buttons';

import { HLRComponent } from "./hlr.component";

import { ChecklistComponent } from "./checklist/checklist.component";
import { HLRFlowComponent } from "./hlrflow/hlrflow.component";
import { AnalysisButtonComponent } from './hlrflow/analysisbutton/analysisbutton.component';
import { MedicineButtonComponent } from './hlrflow/medicinebutton/medicinebuttons.component';
import { HeartMassageComponent } from './hlrflow/heartmassage/heartmassage.component';
import {HlrstepComponent} from "./hlrflow/hlrstep/hlrstep.component";


@NgModule({
  declarations: [
    HLRComponent,
    ChecklistComponent,
    HLRFlowComponent,
    AnalysisButtonComponent,
    MedicineButtonComponent,
    HeartMassageComponent,
    HlrstepComponent
  ],
  imports: [
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HLRComponent]
})
export class HLRModule { }
