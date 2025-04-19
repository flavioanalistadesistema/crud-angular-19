import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Product } from '../product.module';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  imports: [MatCardModule, MatButtonModule, CommonModule, FormsModule, MatInputModule, MatFormFieldModule],
    templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  product: Product = {
    name:  '',
    price: 0  };

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  createadProduct() {
    this.productsService.create(this.product).subscribe(() => {
      this.productsService.msgProduct ('Product created successfully!');
      this.router.navigate(['/products']);
    });      
  }

  canceldProduct() {
    this.router.navigate(['/products']);
  }
}
