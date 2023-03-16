import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDescricaoComponent } from './item-descricao/item-descricao.component';

const routes: Routes = [
  {path: "", component: ItemDescricaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescricaoRoutingModule { }
