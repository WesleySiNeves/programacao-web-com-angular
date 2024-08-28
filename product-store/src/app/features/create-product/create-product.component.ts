import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar)

    form = new FormGroup({
    name : new FormControl<string>('',{nonNullable:true,validators: Validators.required}),
    price : new FormControl<number>(0,{nonNullable:true,validators: Validators.required}),
    description : new FormControl<string>('',{nonNullable:true}),
  
      })

    onSubmit()
    {
      this.productsService.post({
        name :this.form.controls.name.value,
        price :this.form.controls.price.value,
        description :this.form.controls.description.value


      }).subscribe( () => {
      this.matSnackBar.open("Registro Salvo com Sucesso!","OK")})
      
    }
}
