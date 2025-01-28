// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];  // Array to store cart items
  private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);  // Observable for cart count

  constructor() {}
  // Add item to the cart
  addToCart(item: any): void {
    // Add the item to the cartItems array
    this.cartItems.push(item);
  
    // Store the cartItems in localStorage by converting the array to a string
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  
    // Emit the updated cart item count
    this.cartItemCountSubject.next(this.cartItems.length);
  }
  

  // Remove item from the cart
  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);  // Remove item from cart
      this.cartItemCountSubject.next(this.cartItems.length);  // Emit updated count
    }
  }

  // Get current cart items
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Get cart item count as observable (useful for reacting to changes)
  getCartItemCount$() {
    return this.cartItemCountSubject.asObservable();
  }

  // Get cart item count directly
  getCartItemCount(): number {
    return this.cartItems.length;
  }
}
