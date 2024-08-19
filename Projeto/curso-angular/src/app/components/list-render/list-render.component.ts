import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { Carro } from '../../Carro';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  carros : Carro[] = [
    
        {nome :"Argo",marca :"Fiat"},
        {nome :"Kwid",marca :"Renault"},
        {nome :"Onix",marca :"Chevrolet"},
        {nome :"Sandero",marca :"Renault"},
  ];
   
 detalhesCarros = ''
 today = new Date()

 constructor(private listService: ListService) {

 }
   showDetahes(item: Carro)
  {
    this.detalhesCarros =`Carro ${item.nome} da marca  ${item.marca} !`;
  }
  removeCarro(carro:Carro){

    console.log("removendo Animal")
    this.carros = this.listService.remove(this.carros,carro);
  }
  
      
  
}
