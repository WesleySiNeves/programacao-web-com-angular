import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Interfaces/product.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  product = input<Product | null>(null);
  // product:Product = inject(ActivatedRoute).snapshot.data['product'];
  form! :FormGroup;

  @Output()  save = new EventEmitter<Product>();

  ngOnInit(): void {

    this.form= new FormGroup({
      name : new FormControl<string>(this.product()?.name ?? ''),
      price : new FormControl<number>(this.product()?.price ?? 0),
      description : new FormControl<string>(this.product()?.description ??  '')
        })
  }


  onSubmit()  {

     const product = this.form.value as Product;
     this.save.emit(product );

  }
}
