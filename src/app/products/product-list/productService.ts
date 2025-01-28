import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[] = []; // Store products in an array
  private productsSubject = new BehaviorSubject<Product[]>(this.products); // Observable for product list

  constructor() {
    // Load products from localStorage if available
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
      this.productsSubject.next(this.products);
    }
  }

  // Get all products
  getAllProducts() {
    return this.productsSubject.asObservable();
  }

  // Add a new product
  addProduct(product: Product) {
    this.products.push(product);
    this.updateLocalStorage();
  }

  // Update an existing product
  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.updateLocalStorage();
    }
  }

  // Delete a product
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.updateLocalStorage();
  }

  // Find a product by ID
  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  // Search products by name (case-insensitive)
  searchProducts(searchTerm: string) {
    return this.products.filter(p =>
      p.productname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Filter products by category
  filterProductsByCategory(category: string) {
    if (category === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.productcategory === category);
  }

  // Private method to update localStorage and the productsSubject
  private updateLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products)); // Save products to localStorage
    this.productsSubject.next(this.products); // Update observable
  }
}
