import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/Interfaces/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {


    productsService = inject(ProductsService);
    matSnackBar = inject(MatSnackBar)
    router = inject(Router);

    product:Product = inject(ActivatedRoute).snapshot.data['product'];


      onSubmit(parametro: Product) {
     
    
        // Atualizar os valores do produto com os valores do formulário
      this.product.name = parametro.name;
      this.product.price = parametro.price;
      this.product.description = parametro.description;


        this.productsService.put(this.product.id,  
          this.product)
        .subscribe( () => {
        this.matSnackBar.open("Registro alterado com sucesso!","OK")})
        
     
  }
}
