import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from '../components/mainmenu/mainmenu.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
