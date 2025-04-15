import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Product } from '../product.module';

@Component({
  selector: 'app-product-create',
  imports: [MatButtonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  product: Product = {
    name: 'Product Name',
    price: 100
  };

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
