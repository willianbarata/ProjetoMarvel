import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescricaoRoutingModule } from './descricao-routing.module';
import { ItemDescricaoComponent } from './item-descricao/item-descricao.component';


@NgModule({
  declarations: [
    ItemDescricaoComponent
  ],
  imports: [
    CommonModule,
    DescricaoRoutingModule
  ]
})
export class DescricaoModule { }
