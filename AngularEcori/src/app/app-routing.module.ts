import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path:"personagens",
    loadChildren: () => import('./itemCharacter/character-listar/character-listar.module').then(modulo => modulo.CharacterListarModule)
  },
  {
    path:"personagens/descricao/:id",
    loadChildren: () => import('./itemCharacter/descricao/descricao.module').then(modulo => modulo.DescricaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
