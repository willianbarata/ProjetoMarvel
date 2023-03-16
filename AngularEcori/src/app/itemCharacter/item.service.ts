import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'https://localhost:7280';
  private endpoint = 'CharacterList';

  constructor(private httpClient: HttpClient) { }

  listar(limit: string, offset: string): Observable<Character[]>{

    var listCharacter = this.httpClient.get<Character[]>(`${this.baseUrl}/${this.endpoint}/${limit}/${offset}`);
    console.log(listCharacter)
    return listCharacter;



  }
}
