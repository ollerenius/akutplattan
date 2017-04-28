import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {BarnHLRStartComponent} from "../components/barnhlr/barnhlr.component";
import {BarnHLRSettingsComponent} from "../components/barnhlrsettings/barnhlrsettings.component";
import {LogComponent} from "../components/log/log.component";
import {HLRComponent} from "../components/hlr/hlr.component";
import {RespiratoryArrestComponent} from '../components/respiratoryarrest/respiratoryarrest.component'

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'hlr', component: HLRComponent },
  { path: 'log', component: LogComponent },
  { path: 'barnhlr', component: BarnHLRStartComponent},
  { path: 'barnhlr/calc', component: BarnHLRSettingsComponent},
  { path: 'respiratoryarrest', component: RespiratoryArrestComponent}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
