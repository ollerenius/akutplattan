import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { ButtonsModule } from 'ng2-bootstrap/buttons';

import { HLRComponent } from "./hlr.component";

import { ChecklistComponent } from "./checklist/checklist.component";
import { HLRFlowComponent } from "./hlrflow/hlrflow.component";
import {HlrstepComponent} from "./hlrflow/hlrstep/hlrstep.component";
import {LoggingService} from "../../services/logging.service";
import {TimerComponent} from "./timer/timer.component";
import {TimerService} from "../../services/timer.service";
import {routing} from "../../app/app.routes";


@NgModule({
  declarations: [
    HLRComponent,
    ChecklistComponent,
    HLRFlowComponent,
    HlrstepComponent,
    TimerComponent
  ],
  imports: [
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoggingService, TimerService],
  bootstrap: [HLRComponent]
})
export class HLRModule { }
