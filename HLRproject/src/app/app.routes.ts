import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {HLRComponent} from "../components/hlr/hlr.component";

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'hlr', component: HLRComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
