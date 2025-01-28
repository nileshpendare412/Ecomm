import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,DatePipe,CommonModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent implements OnInit {

  successMessageVisible: boolean = false;
  successMessage: string = '';

  cartItems: any[] = [];

  constructor(private cartService: CartService) {}
  
  ngOnInit() {
    // First, try to get cart items from localStorage
    const storedCartItems = localStorage.getItem('cartItems');

    
    if (storedCartItems) {
      // If items are found in localStorage, parse them and assign to cartItems
      this.cartItems = JSON.parse(storedCartItems);
    } else {
      // If no items in localStorage, get items from the service
      this.cartItems = this.cartService.getCartItems();
    }
  
    // // Emit the initial count of items in the cart
    // this.cartItemCountSubject.next(this.cartItems.length);
  } 
  
  
  selectedProduct: any = null;
  quantity: number = 1; // Initialize quantity
  maxQuantity: number = 10; // Example max quantity

  // Open details for a specific product
  openDetails(product: any) {
    this.selectedProduct = product;
  }
removeItem(index: number): void {
    // Remove item from the cart
    this.cartItems.splice(index, 1);

    // Set success message and show the popup
    this.successMessage = 'Item removed successfully!';
    this.successMessageVisible = true;

    // Automatically hide the success message after 3 seconds
    setTimeout(() => {
      this.successMessageVisible = false;
    }, 3000); // Adjust the time as needed
  }
  // Methods to adjust quantity
  increaseQuantity() {
    if (this.quantity < this.maxQuantity) this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  goToCheckout() {
    // Navigation logic here
  }

  onQuantityChange() {
    // Additional logic for quantity changes
  }
  closePriceDetails() {
    
  }
  openPriceDetails() {
    this.selectedProduct = true;
  }


}
