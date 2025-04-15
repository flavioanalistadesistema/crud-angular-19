import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

export const routes: Routes = [    
{ path: '', component: HomeComponent },
{ path: 'products', component: ProductComponent },
{ path: 'products/createad', component: ProductCreateComponent },
{ path: '**', redirectTo: '' } 
];
