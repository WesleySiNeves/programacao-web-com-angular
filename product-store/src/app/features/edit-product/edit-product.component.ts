import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/Interfaces/product.interface';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {


    productsService = inject(ProductsService);
    matSnackBar = inject(MatSnackBar)
    router = inject(Router);

    product:Product = inject(ActivatedRoute).snapshot.data['product'];


    form = new FormGroup({
    name : new FormControl<string>(this.product.name),
    price : new FormControl<number>(this.product.price),
    description : new FormControl<string>(this.product.description)
  
      })

      onSubmit()
      {
        // Atualizar os valores do produto com os valores do formulário
      this.product.name = this.form.controls.name.value!;
      this.product.price = this.form.controls.price.value!;
      this.product.description = this.form.controls.description.value!;


        this.productsService.put(this.product.id,  
          this.product)
        .subscribe( () => {
        this.matSnackBar.open("Registro alterado com sucesso!","OK")})
        
      }

  

}
