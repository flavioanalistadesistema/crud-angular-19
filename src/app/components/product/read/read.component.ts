import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-read',
  imports: [CommonModule, MatTableModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price'];

  constructor(private productService: ProductsService) { 
  }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(this.products, 'products');
    });
    
  }
}
