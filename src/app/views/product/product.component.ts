import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [ MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private router: Router) { }
  
  navigateToProductsCreate() {
    this.router.navigate(['/products/createad']);
  }
}  
  
 