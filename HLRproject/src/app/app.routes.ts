import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {LogComponent} from "../components/log/log.component";
import {HLRComponent} from "../components/hlr/hlr.component";

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'hlr', component: HLRComponent },
  { path: 'log', component: LogComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
