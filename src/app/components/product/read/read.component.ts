import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.module';

@Component({
  selector: 'app-read',
  imports: [],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) { 
  }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
    
    console.log(this.products, 'products');
  }
}
