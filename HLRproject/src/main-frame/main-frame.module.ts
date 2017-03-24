import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { MainFrameComponent } from './main-frame.component';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import { HeaderComponent } from "../components/header/header.component";
import { HLRComponent } from "../components/hlr/hlr.component";
import {routing} from "./main-frame.routes";
import { ChecklistComponent } from "../components/hlr/checklist/checklist.component";
import { HLRFlowComponent } from "../components/hlr/hlrflow/hlrflow.component";
import { PopoverAnalysisComponent } from "../components/hlr/popover_analysis/popover_analysis.component";
import { PopoverMedicineComponent } from "../components/hlr/popover_medicine/popover_medicine.component";
import { PopoverModule, ButtonsModule } from "ng2-bootstrap";

@NgModule({
  declarations: [
    MainFrameComponent,
    MainMenuComponent,
    HeaderComponent,
    HLRComponent,
    ChecklistComponent,
    HLRFlowComponent,
    PopoverAnalysisComponent,
    PopoverMedicineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    PopoverModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [MainFrameComponent]
})
export class MainFrameModule {
}
