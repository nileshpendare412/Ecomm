import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { pipe } from 'rxjs';
import { pipeline } from 'stream';

@Component({
  selector: 'app-item-search',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './item-search.component.html',
  styleUrl: './item-search.component.scss'
})
export class ItemSearchComponent {


  products = [
    { image: '../../../assets/p1.jpeg', name: 'Fry Papad' },
    { image: '../../../assets/p2.jpeg', name: 'Fry Papad' },
    { image: '../../../assets/p3.jpeg', name: 'Masala Papad' },
    { image: '../../../assets/p4.jpeg', name: 'Masala Papad' },
    // Add more products as needed
  ];
  

  selectedProduct: any = null; // Track selected product
  quantity: number = 1; // Initialize quantity
  maxQuantity: number = 10; // Example max quantity

  // Open details for a specific product
  openDetails(product: any) {
    this.selectedProduct = product;
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

}
