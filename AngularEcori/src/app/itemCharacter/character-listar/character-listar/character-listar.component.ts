import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';
import { Observable } from 'rxjs';
import { Character } from '../../character.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-character-listar',
  templateUrl: './character-listar.component.html',
  styleUrls: ['./character-listar.component.scss']
})
export class CharacterListarComponent implements OnInit{

  itens$!: Observable<Character[]>;
  pageEvent = PageEvent;

  colunasTabela = ['id', 'name', 'urlImage']

  constructor(private itemService: ItemService ){}

  ngOnInit(){
    console.log("OnInit")

    let page = '5';
    let off = '0';
    this.listaItens(page, off)
  }

  evento(e: any){
    console.log("**********************************************************");
    console.log(e.pageIndex);
    console.log(e.pageSize);
    console.log(e);



    let page = e.pageSize;
    let off = e.pageIndex;
    this.listaItens(page, off)

  }

  listaItens(lim : string, off: string){


    this.itens$ = this.itemService.listar(lim, off);
  }

}
