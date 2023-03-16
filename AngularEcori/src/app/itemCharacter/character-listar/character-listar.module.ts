import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListarRoutingModule } from './character-listar-routing.module';
import { CharacterListarComponent } from './character-listar/character-listar.component';

import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    CharacterListarComponent
  ],
  imports: [
    CommonModule,
    CharacterListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatPaginatorModule
  ]
})
export class CharacterListarModule { }
