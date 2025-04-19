import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ReadComponent } from "../../components/product/read/read.component";
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-product',
  imports: [MatButtonModule, ReadComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(
    private router: Router,
    private headerService: HeaderService
  ) { 
    headerService.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }
  
  navigateToProductsCreate() {
    this.router.navigate(['/products/createad']);
  }
}  
  
 