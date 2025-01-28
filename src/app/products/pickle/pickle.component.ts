import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-pickle',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './pickle.component.html',
  styleUrl: './pickle.component.scss'
})
export class PickleComponent {

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

  isPopupOpen = false;
  
  products = [
    { name: 'Mango Pickle', weight: '500g',discount:'10%', image: '../../../assets/Pickle Label Design.jpeg', price: '500', rating: 4 },
    { name: 'Mango Pickle', weight: '300g', discount:'10%',image: '../../../assets/Pickle Label Design.jpeg', price: '300', rating: 3 },
    { name: 'Mango Pickle', weight: '1000g', discount:'10%',image: '../../../assets/Pickle Label Design.jpeg', price: 700, rating: 5 },
    { name: 'Mango Pickle', weight: '400g', discount:'10%',image: '../../../assets/Pickle Label Design.jpeg', price: '400', rating: 3 },
    { name: 'Lemon Pickle', weight: '500g', discount:'10%',image: '../../../assets/images (6).jpeg', price: 500, rating: 4 },
    { name: 'Lemon Pickle', weight: '500g', discount:'10%',image: '../../../assets/images (7).jpeg', price: 400, rating: 4 },
    { name: 'Lemon Pickle', weight: '1000g', discount:'10%',image: '../../../assets/images (8).jpeg', price: 800, rating: 4 },
    { name: 'Lemon Pickle', weight: '250g', discount:'10%',image: '../../../assets/images (9).jpeg', price: 300, rating: 4 },
    { name: 'Chiili Pickle', weight: '500g', discount:'10%',image: '../../../assets/images (15).jpeg', price: 300, rating: 4 },
    { name: 'Chiili Pickle', weight: '1000g', discount:'10%', image: '../../../assets/images (16).jpeg', price: 540, rating: 4 },
    { name: 'Chiili Pickle', weight: '750g', discount:'10%',image: '../../../assets/images (17).jpeg', price: 400, rating: 4 },
    { name: 'Chiili Pickle', weight: '750g', discount:'10%',image: '../../../assets/download.jpeg', price: 400, rating: 4 },
    { name: 'Chiili Pickle', weight: '500g', discount:'10%',image: '../../../assets/images (11).jpeg', price: 300, rating: 4 },
    { name: 'Chiili Pickle', weight: '500g', discount:'10%',image: '../../../assets/images (12).jpeg', price: 300, rating: 4 },
    { name: 'Chiili Pickle', weight: '500g', discount:'10%',image: '../../../assets/images (13).jpeg', price: 300, rating: 4 },
    { name: 'Chiili Pickle', weight: '500g', discount:'10%',image: '../../../assets/images (14).jpeg', price: 300, rating: 4 },
    { name: 'Goosberry Pickle', weight: '1000g', discount:'10%',image: '../../../assets/images (18).jpeg', price: 800, rating: 4 },
    { name: 'Goosberry Pickle', weight: '600g', discount:'10%',image: '../../../assets/images (19).jpeg', price: 500, rating: 4 },
    { name: 'Goosberry Pickle', weight: '400g', discount:'10%',image: '../../../assets/download (2).jpeg', price: 400, rating: 4 },
    { name: 'Goosberry Pickle', weight: '500g', discount:'10%',image: '../../../assets/download (3).jpeg', price: 450, rating: 4 },
    { name: 'Tamirind  Pickle', weight: '1000g', discount:'10%',image: '../../../assets/download (4).jpeg', price: 700, rating: 4 },
    { name: 'Tamirind  Pickle', weight: '400g', discount:'10%',image: '../../../assets/download (5).jpeg', price: 450, rating: 4 },
    { name: 'Tamirind  Pickle', weight: '800g', discount:'10%',image: '../../../assets/download (6).jpeg', price: 650, rating: 4 },
    { name: 'Tamirind  Pickle', weight: '600g', discount:'10%',image: '../../../assets/images (20).jpeg', price: 500, rating: 4 }
  ];


  // Method to calculate the discount based on price
  calculateDiscount(price: number): number {
    if (price >= 500) {
      return 20; // 20% discount
    } else if (price <= 500) {
      return 10; // 10% discount
    }
    return 0; // No discount
  }

  // Method to get the price after discount
  getDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount / 100);
  }

  // Method to safely parse the price and return a valid number
  parsePrice(price: any): number {
    const parsed = parseFloat(price);
    return isNaN(parsed) ? 0 : parsed;  // Return 0 if not a valid number
  }
  
  

  selectedProduct: any = null; // Track selected product
  quantity: number = 1; // Initialize quantity
  maxQuantity: number = 10; // Example max quantity

  // Open details for a specific product
  openDetails(product: any) {
    this.selectedProduct = product;
  }
  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  // Methods to adjust quantity
 
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity < this.maxQuantity) {
      this.quantity++;
    }
  }
  goToCheckout() {
    // Navigation logic here
  }

  onQuantityChange() {
    // Additional logic for quantity changes
  }
  closePriceDetails() {
    this.selectedProduct = null;
  }
  openPriceDetails() {
    this.selectedProduct = true;
  }

}
