import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.module';

@Component({
  selector: 'app-product-delete',
  imports: [MatCardModule, MatButtonModule, CommonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit{
  product: Product = { name: '', price: 0 }

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ){}  
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productsService.readById(id).subscribe((product) => {
        this.product = product;
      });
    }
   }

   deleteProduct() {
    const id = this.product.id;
    if (id) {
      this.productsService.delete(id).subscribe(() => {
        this.productsService.msgProduct(`Produto ${this.product.name} deletado com sucesso!`);
        this.router.navigate(['/products']);
      });
    }
   }

   cancelProduct() {
    this.router.navigate(['/products']);
   }

   navigateToProducts() {
    this.router.navigate(['/products']);
   }

}
