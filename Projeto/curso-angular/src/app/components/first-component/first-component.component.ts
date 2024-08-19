import { Component } from '@angular/core';


@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  
  title = 'Meu Projeto Angular';
  user = 'Alice';
  today = new Date();
  Profissao ="Estudante";
  Esportes =["Volei","Futeboll","Natação"];

  carro = {

    ano: 2020,
    cor : "Vermelho",
    modelo :"polo"
  }

}
