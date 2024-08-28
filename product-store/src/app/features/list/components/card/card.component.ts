import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../../../shared/Interfaces/product.interface';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  product = input.required<Product>();

  productName = computed(() => this.product().name);
  producPrice = computed(() => this.product().price);
  productId = computed(() => this.product().id);
  productDescricao = computed(() => this.product().description);

  @Output() edit = new EventEmitter();

   onEdit()
   {
     this.edit.emit(this.product);
   }
  


}
