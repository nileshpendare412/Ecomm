import { CartService } from './../../cart.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { Product } from '../../product-interface';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  successMessageVisible = false; 

  cartCount = 0;  // Track the number of items in the cart
  showPopup = false;  // To manage the visibility of the success message

  // // Add item to cart and show the success message
  // addToCart(item: any) {
  //   this.cartCount++;  // Increment the cart count
  //   this.showPopup = true;  // Show the "Item added successfully" message
    
  //   // Hide the success message after 3 seconds
  //   setTimeout(() => {
  //     this.showPopup = false;
  //   }, 3000);
  // }

  // Additional logic for opening cart, etc.
  openCart() {
    console.log('Open Cart');
  }

  // Other methods like `openDetails()` can go here
  // openDetails(item: any) {
  //   console.log('Open product details for:', item);
  // }
  selectedProduct: any = null;
  quantity: number = 1; // Initialize quantity
  maxQuantity: number = 10; // Example max quantity

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

  items = [
    { name: 'Mango Pickle', weight: '500g', image: '../../../assets/Pickle Label Design.jpeg', price: '500', rating: 4 },
    { name: 'Mango Pickle', weight: '300g', image: '../../../assets/Pickle Label Design.jpeg', price: '300', rating: 3 },
    { name: 'Mango Pickle', weight: '1000g', image: '../../../assets/Pickle Label Design.jpeg', price: 700, rating: 5 },
    { name: 'Mango Pickle', weight: '400g', image: '../../../assets/Pickle Label Design.jpeg', price: '400', rating: 3 },
    { name: 'Lemon Pickle', weight: '500g', image: '../../../assets/images (6).jpeg', price: 500, rating: 4 },
    { name: 'Lemon Pickle', weight: '500g', image: '../../../assets/images (7).jpeg', price: 400, rating: 4 },
    { name: 'Lemon Pickle', weight: '1000g', image: '../../../assets/images (8).jpeg', price: 800, rating: 4 },
    { name: 'Lemon Pickle', weight: '250g', image: '../../../assets/images (9).jpeg', price: 300, rating: 4 },
    { name: 'Papad', weight: '250g', image: '../../../assets/p5.jpeg', price: 200,  rating: 4 },
    { name: 'Papad', weight: '250g', image: '../../../assets/p6.jpeg', price: 400, rating: 2 },
    { name: 'Papad', weight: '250g', image: '../../../assets/p7.jpeg', price: 250, rating: 3 },
    { name: 'Papad', weight: '250g', image: '../../../assets/p8.jpeg', price: 100, rating: 4 },
    { name: 'Chilli Pickle', weight: '250g',discount:10, image: '../../../assets/images (15).jpeg', price: 200,  rating: 4 },
    { name: 'Chilli Pickle', weight: '500g', image: '../../../assets/images (16).jpeg', price: 400, rating: 2 },
    { name: 'Chilli Pickle', weight: '450g',discount:10, image: '../../../assets/images (17).jpeg', price: 350, rating: 3 },
    { name: 'Chilli Pickle', weight: '250g', image: '../../../assets/download.jpeg', price: 100, rating: 4 },
    { name: 'Chilli Pickle', weight: '250g', discount:10,image: '../../../assets/images (11).jpeg', price: 200,  rating: 4 },
    { name: 'Chilli Pickle', weight: '250g', discount:10,image: '../../../assets/images (12).jpeg', price: 400, rating: 2 },
    { name: 'Chilli Pickle', weight: '250g', discount:10,image: '../../../assets/images (13).jpeg', price: 250, rating: 3 },
    { name: 'Chilli Pickle', weight: '250g', discount:10,image: '../../../assets/images (14).jpeg', price: 100, rating: 4 },
    { name: 'Goosberry Pickle', weight: '500g', discount:10,image: '../../../assets/download (2).jpeg', price: 250,  rating: 4 },
    { name: 'Goosberry Pickle', weight: '1000g', discount:15,image: '../../../assets/download (3).jpeg', price: 500, rating: 2 },
    { name: 'Goosberry Pickle', weight: '250g', discount:12,image: '../../../assets/images (18).jpeg', price: 200, rating: 3 },
    { name: 'Goosberry Pickle', weight: '400g', discount:10,image: '../../../assets/images (19).jpeg', price: 350, rating: 4 },
    { name: 'Tamirind Pickle', weight: '500g', discount:10,image: '../../../assets//download (4).jpeg', price: 250,  rating: 4 },
    { name: 'Tamirind Pickle', weight: '1000g', discount:15,image: '../../../assets/download (5).jpeg', price: 500, rating: 2 },
    { name: 'Tamirind Pickle', weight: '250g', discount:12,image: '../../../assets/download (6).jpeg', price: 200, rating: 3 },
    { name: 'Tamirind Pickle', weight: '400g', discount:10,image: '../../../assets/images (20).jpeg', price: 350, rating: 4 },
    { name: 'Kurkure', weight: '500g', discount:10,image: '../../../assets//k1.jpeg', price: 250,  rating: 4 },
    { name: 'Kurkure', weight: '1000g', discount:15,image: '../../../assets/k2.jpeg', price: 500, rating: 2 },
    { name: 'Kurkure', weight: '250g', discount:12,image: '../../../assets/k3.jpeg', price: 200, rating: 3 },
    { name: 'Kurkure', weight: '400g', discount:10,image: '../../../assets/k4.jpeg', price: 350, rating: 4 },
    { name: 'Namkeen', weight: '500g', discount:10,image: '../../../assets/n5.jpeg', price: 250,  rating: 4 },
    { name: 'Namkeen', weight: '1000g', discount:15,image: '../../../assets/n6.jpeg', price: 500, rating: 2 },
    { name: 'Namkeen', weight: '250g', discount:12,image: '../../../assets/n7.jpeg', price: 200, rating: 3 },
    { name: 'Namkeen', weight: '400g', discount:10,image: '../../../assets/n8.jpeg', price: 350, rating: 4 },
    { name: 'Numkeen', weight: '500g',discount:'10%', image: '.../../../assets/n1.jpeg', price: '500', rating: 4 },
    { name: 'Numkeen', weight: '300g', discount:'10%',image: '../../../assets/n2.jpeg', price: '300', rating: 3 },
    { name: 'Numkeen', weight: '1000g', discount:'10%',image: '../../../assets/n3.jpeg', price: 700, rating: 5 },
    { name: 'Numkeen', weight: '400g', discount:'10%',image: '../../../assets/n4.jpeg', price: '400', rating: 3 },
    { name: 'Chips', weight: '500g',discount:'10%', image: '.../../../assets/c1.jpeg', price: '500', rating: 4 },
    { name: 'Chips', weight: '300g', discount:'10%',image: '../../../assets/c2.jpeg', price: '300', rating: 3 },
    { name: 'Chips', weight: '1000g', discount:'10%',image: '../../../assets/c3.jpeg', price: 700, rating: 5 },
    { name: 'Chips', weight: '400g', discount:'10%',image: '../../../assets/c4.jpeg', price: '400', rating: 3 }


  ];

  selectProduct(item: any) {
    this.selectedProduct = item;
  }
  // Method to calculate the discount based on price
  calculateDiscount(price: number): number {
    if (price >= 500) {
      return 20; // 20% discount
    } else if (price <= 500) {
      return 10; // 10% discount
    }
    return 0; // No discount
  }

  
  // Method to open product details
  openDetails(item: any) {
    this.selectedProduct = item; // Set the selected product
  }

  // Method to close the modal
  closePriceDetails() {
    this.selectedProduct = null; // Close the modal
  }


  // Method to handle quantity increase
  increaseQuantity() {
    if (this.quantity < this.maxQuantity) {
      this.quantity++;
    }
  }

  // Method to handle quantity decrease
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Navigate to checkout
  goToCheckout() {
    // Logic for checkout (optional)
  }

onQuantityChange() {
  // Additional logic for quantity changes
}
openPriceDetails() {
  this.selectedProduct = true;
}

getDiscountedPrice(price: string | number, discount: number): number {
  const priceValue = typeof price === 'string' ? parseFloat(price) : price;
  return priceValue - (priceValue * discount / 100);
}


  // Method to safely parse the price and return a valid number
  parsePrice(price: any): number {
    const parsed = parseFloat(price);
    return isNaN(parsed) ? 0 : parsed;  // Return 0 if not a valid number
  }
CategoryList = ['Mango','Goosbery','Lemon','Chilli','Tamirind','Papad','Chips'];

ProductList = [
 {productId:1, rating:3, productName:'Mango',category:'pickle',price:'2500₹',discount:12,availableQauntity:5,imageUrl:'../../../../'}
]
}



