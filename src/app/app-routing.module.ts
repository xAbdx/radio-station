import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaidosComponent } from './raidos/raidos.component';

const routes: Routes = [
    {path:'./raidos', component: RaidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
