import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListarComponent } from './character-listar/character-listar.component';

const routes: Routes = [
  {path: "", component: CharacterListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterListarRoutingModule { }
