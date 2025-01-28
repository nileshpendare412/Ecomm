import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from "../../general/home/home.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-papad',
  standalone: true,
  // imports: [RouterLink, HomeComponent],
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './papad.component.html',
  styleUrl: './papad.component.scss'
})
export class PapadComponent {

  successMessageVisible = false; // To control the visibility of the success message
  successMessagePosition = { top: 0, left: 0 }; // To store the position of the success message
  successMessage: string = '';

  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    console.log("hy");
    this.cartService.addToCart(item);
    this.showSuccessMessage();
   
  }
  showSuccessMessage() {
    this.successMessageVisible = true; // Display success message
    setTimeout(() => {
      this.successMessageVisible = false; // Hide message after 3 seconds
    }, 3000);
  }
  removeItem(index: number): void {
    // Remove item from cart
    this.products.splice(index, 1);

    // Set success message and show the popup
    this.successMessage = 'Item removed successfully!';
  }

  products = [
    { image: '../../../assets/p1.jpeg', name: 'Fry Papad' },
    { image: '../../../assets/p2.jpeg', name: 'Fry Papad' },
    { image: '../../../assets/p3.jpeg', name: 'Masala Papad' },
    { image: '../../../assets/p4.jpeg', name: 'Masala Papad' },
    { image: '../../../assets/p5.jpeg', name: 'Fry Papad' },
    { image: '../../../assets/p6.jpeg', name: 'Fry Papad' },
    { image: '../../../assets/p7.jpeg', name: 'Masala Papad' },
    { image: '../../../assets/p8.jpeg', name: 'Masala Papad' },
    // Add more products as needed
  ];
  

  selectedProduct: any = null; // Track selected product
  quantity: number = 1; // Initialize quantity
  maxQuantity: number = 10; // Example max quantity

  // Open details for a specific product
  openDetails(item: any) {
    this.selectedProduct = item; // Set the selected product
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
}
