import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Product } from '../Interfaces/product.interface';
import { ProductPayload } from '../Interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpClient =inject(HttpClient)
 
  getAll(){
    return this.httpClient.get<Product[]>('/api/products');
  }

  getById(id:  string){

    return this.httpClient.get<Product>(`/api/products/${id}`);
  }

  post(payload:ProductPayload){

    return this.httpClient.post('/api/products',payload);
  }

  put(id:  string, product: Product){

    return this.httpClient.put(`/api/products/${id}`,product);
  }
 
   
}
