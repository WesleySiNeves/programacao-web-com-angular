import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListProdutosComponent } from './features/list-produtos/list-produtos.component';
import { CreateProductComponent } from './features/create-product/create-product.component';
import { EditProductComponent } from './features/edit-product/edit-product.component';
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/products.service';

export const routes: Routes = [

    {
        path: '',
        component: ListProdutosComponent

    },
    {
        path: 'create-product',
        loadComponent: ()  => import('./features/create-product/create-product.component').then(
                (m)=> m.CreateProductComponent
        ),
    },
    {
        path: 'edit-product/:id',
        resolve: {
           product:  (route:ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{
              const productsService =  inject(ProductsService)

             return productsService.getById(route.paramMap.get('id') as string);

            }
        },
        loadComponent: ()  => import('./features/edit-product/edit-product.component').then(
                (m)=> m.EditProductComponent
        ),
    },
];
