import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-namkeen',
  standalone: true,
  imports: [RouterLink , FormsModule,CommonModule],
  templateUrl: './namkeen.component.html',
  styleUrl: './namkeen.component.scss'
})
export class NamkeenComponent {

  successMessageVisible = false; 

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

  products = [
    { name: 'Numkeen', weight: '500g',discount:'10%', image: '.../../../assets/n5.jpeg', price: '500', rating: 4 },
    { name: 'Numkeen', weight: '300g', discount:'10%',image: '../../../assets/n6.jpeg', price: '300', rating: 3 },
    { name: 'Numkeen', weight: '1000g', discount:'10%',image: '../../../assets/n7.jpeg', price: 700, rating: 5 },
    { name: 'Numkeen', weight: '400g', discount:'10%',image: '../../../assets/n8.jpeg', price: '400', rating: 3 },
    { name: 'Numkeen', weight: '500g',discount:'10%', image: '.../../../assets/n1.jpeg', price: '500', rating: 4 },
    { name: 'Numkeen', weight: '300g', discount:'10%',image: '../../../assets/n2.jpeg', price: '300', rating: 3 },
    { name: 'Numkeen', weight: '1000g', discount:'10%',image: '../../../assets/n3.jpeg', price: 700, rating: 5 },
    { name: 'Numkeen', weight: '400g', discount:'10%',image: '../../../assets/n4.jpeg', price: '400', rating: 3 },

  ];

  selectedProduct: any = null;
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
  closePriceDetails() {
    
  }
  openPriceDetails() {
    this.selectedProduct = true;
  }

}
