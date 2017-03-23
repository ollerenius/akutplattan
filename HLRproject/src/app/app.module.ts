import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PopoverAnalysisComponent } from '../components/hlr/popover_analysis/popover_analysis.component';
import { PopoverMedicinceComponent } from '../components/hlr/popover-medicince/popover_medicince.component';

@NgModule({
  declarations: [
    AppComponent,
    PopoverAnalysisComponent,
    PopoverMedicinceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
