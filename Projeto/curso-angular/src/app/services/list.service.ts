import { Injectable } from '@angular/core';
import { Carro } from '../Carro';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

    
  remove(carros:Carro[], carro:Carro)
  {
  
    return carros.filter( (a)=> carro.nome !== a.nome );

  }
}
