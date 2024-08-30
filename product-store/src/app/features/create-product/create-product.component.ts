import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../../shared/components/form/form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/Interfaces/product.interface';


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  
    productsService = inject(ProductsService);
    matSnackBar = inject(MatSnackBar)
    router = inject(Router);

    product:Product = inject(ActivatedRoute).snapshot.data['product'];


    onSubmit(parametro: Product)
    {
      this.productsService.post({
        name :parametro.name,
        price :parametro.price,
        description :parametro.description


      }).subscribe( () => {
      this.matSnackBar.open("Registro Salvo com Sucesso!","OK")})
      
    }
}
