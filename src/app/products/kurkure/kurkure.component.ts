import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-kurkure',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './kurkure.component.html',
  styleUrl: './kurkure.component.scss'
})
export class KurkureComponent {

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
    { name: 'Kurkure', weight: '500g',discount:'10%', image: '../../../assets/k1.jpeg', price: '500', rating: 4 },
    { name: 'Kurkure', weight: '300g', discount:'10%',image: '../../../assets/k2.jpeg', price: '300', rating: 3 },
    { name: 'Kurkure', weight: '1000g', discount:'10%',image: '../../../assets/k3.jpeg', price: 700, rating: 5 },
    { name: 'Kurkure', weight: '400g', discount:'10%',image: '../../../assets/k4.jpg', price: '400', rating: 3 },
    { name: 'Chips', weight: '500g',discount:'10%', image: '.../../../assets/c1.jpeg', price: '500', rating: 4 },
    { name: 'Chips', weight: '300g', discount:'10%',image: '../../../assets/c2.jpeg', price: '300', rating: 3 },
    { name: 'Chips', weight: '1000g', discount:'10%',image: '../../../assets/c3.jpeg', price: 700, rating: 5 },
    { name: 'Chips', weight: '400g', discount:'10%',image: '../../../assets/c4.jpeg', price: '400', rating: 3 },

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
