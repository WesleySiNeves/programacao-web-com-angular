import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/Interfaces/product.interface';
import { CardComponent } from '../list/components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list-produtos',
  standalone: true,
  imports: [CommonModule,CardComponent,RouterLink,MatButtonModule],
  templateUrl: './list-produtos.component.html',
  styleUrl: './list-produtos.component.css'
})
export class ListProdutosComponent {

   produtos : Product [] = []

   httpClient = inject(HttpClient)
   router = inject(Router);

  productsService =inject(ProductsService)
   ngOnInit()
   {
     this.productsService.getAll().subscribe((produtos) => {
      this.produtos = produtos

     });
   }

   onEdit(product: Product){

        this.router.navigate(['/edit-product',product.id] );

   }
}
