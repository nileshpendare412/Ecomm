// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs'; // Assuming you have a product model
// import { Product } from './product-interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   private apiUrl = 'https://api.example.com/products'; // Your API endpoint

//   constructor(private http: HttpClient) { }

//   // Get all products
//   getProducts(): Observable<Product[]> {
//     return this.http.get<Product[]>(this.apiUrl);
//   }

//   // Get product by ID
//   getProductById(id: string): Observable<Product> {
//     return this.http.get<Product>(`${this.apiUrl}/${id}`);
//   }

//   // Create a new product
//   createProduct(product: Product): Observable<Product> {
//     return this.http.post<Product>(this.apiUrl, product);
//   }

//   // Update a product
//   updateProduct(id: string, product: Product): Observable<Product> {
//     return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
//   }

//   // Delete a product
//   deleteProduct(id: string): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  // BehaviorSubject to provide state updates

@Injectable({
  providedIn: 'root',
})
export class CartService {
  

    url = 'http://localhost:4200/tasks';
  constructor(private http : HttpClient) { }

  users() {
    return this.http.get(this.url)
  }
}
