import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';
import {LogComponent} from "../components/log/log.component";

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'log', component: LogComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
