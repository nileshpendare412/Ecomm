import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [DatePipe, FormsModule,CommonModule,RouterLink],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss',
  providers: [DatePipe] 
})
export class CheckOutComponent {
  isCheckoutVisible = false; // Control visibility of the image overlay
  isImageBlurred = false; 

  showCheckoutPopup: boolean = false;
  isLoading: boolean = false;
  progressBarWidth: string = '0%'; // Initial width of the progress bar

  products = [
    { name: 'Product 1', price: 490, quantity: 1, image: '../../../assets/p1.jpeg' },
    { name: 'Product 2', price: 500, quantity: 2, image: 'path_to_image' }
  ];
  shippingAddress = '';
  selectedPaymentMethod: string = 'Credit Card';
  totalPrice = 0;
  discount = 0;
  finalPrice = 0;
  paymentStatus = '';
  orderConfirmed = false;

  constructor() {}

  ngOnInit() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    this.discount = this.totalPrice * 0.1; 
    this.finalPrice = this.totalPrice - this.discount;
  }

  // Method to close the image overlay (optional)
  closeCheckout() {
    this.isCheckoutVisible = false;
  }
  
  showCheckout() {
    this.isLoading = true; // Show the progress bar
    let progress = 0;

    // Simulate progress over 2 seconds
    const interval = setInterval(() => {
      progress += 2;  // Increase the progress by 2% every 100ms
      this.progressBarWidth = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval); // Stop the interval when it reaches 100%
        this.isLoading = false;  // Hide the progress bar
        this.showCheckoutPopup = true;  // Show the checkout popup after progress completes
      }
    }, 100); // Update progress every 100ms (for 2 seconds)
  }
  closePriceDetails() {
    // Add your logic here to handle closing the price details
    console.log('Price details closed');
  }
  confirmOrder() {
    if (this.shippingAddress && this.selectedPaymentMethod) {
      this.paymentStatus = 'Processing payment...';
      setTimeout(() => {
        this.paymentStatus = 'Payment successful!';
        this.orderConfirmed = true;
      }, 2000); // Simulating payment process delay
    } else {
      alert('Please fill in all details.');
    }
  }

}
