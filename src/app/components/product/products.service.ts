import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.module';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class ProductsService {
  // baseUrl = `${environment.apiUrl}`;
  baseUrl = 'https://backend-json-server.onrender.com/cursos';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  msgProduct(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Close', {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: isError ? ['error-snack'] : ['sucess-snack']
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e)));
  }  

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e)));
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e)));
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e)));
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e)));
  }

  errorHandler(e: any): Observable<any> {
    this.msgProduct('Error: ' + e.error.message, true);    
    return EMPTY;
  }
}
