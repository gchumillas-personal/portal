import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeView } from './views/home/home-view';
import { NotFoundView } from './views/not-found/not-found-view';

const routes: Routes = [
  { path: 'home', component: HomeView },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
