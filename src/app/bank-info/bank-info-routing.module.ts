import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { BankInfoComponent } from './bank-info.component';
import { CardListComponent } from './card-list/card-list.component';

const routes: Routes = [
  {
    path: '',
    component: BankInfoComponent,
    children: [
      { 
        path: '',
        redirectTo: 'form'
      },
      { 
        path: 'form', 
        component: FormComponent
      },
      {
        path: 'card',
        component: CardListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankInfoRoutingModule { }
