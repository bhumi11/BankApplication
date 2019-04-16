import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'bank-info',
    pathMatch: 'full'
  },
  {
    path: 'bank-info',
    loadChildren: './bank-info/bank-info.module#BankInfoModule'
    // loadChildren: () => BankInfoModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

