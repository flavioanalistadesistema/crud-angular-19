import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import localePt from '@angular/common/locales/pt';
import { RouterLink, RouterModule } from '@angular/router';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-read',
  imports: [CommonModule, MatTableModule, RouterModule, RouterLink],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductsService) { 
  }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(this.products, 'products');
    });        
  }

  deleteProduct(id: string) {
    this.productService.delete(id).subscribe(() => {
      this.productService.msgProduct('Produto deletado com sucesso!');
      this.products = this.products.filter((product) => product.id !== id);
    });
  }  
}
