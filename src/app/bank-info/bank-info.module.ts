import { NgModule } from '@angular/core';

import { BankInfoRoutingModule } from './bank-info-routing.module';
import { BankInfoComponent } from './bank-info.component';
import { FormComponent } from './form/form.component';
import { CardListComponent } from './card-list/card-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './card-list/content/content.component';
import { HeaderComponent } from './card-list/header/header.component';

@NgModule({
  declarations: [BankInfoComponent, FormComponent, CardListComponent, ContentComponent, HeaderComponent],
  imports: [
    SharedModule,
    BankInfoRoutingModule
  ]
})
export class BankInfoModule { }
