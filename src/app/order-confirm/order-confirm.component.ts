import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-order-confirm',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './order-confirm.component.html',
  styleUrl: './order-confirm.component.scss'
})
export class OrderConfirmComponent {
  
  orderConfirmed = false;
  progressBarWidth = 0;

  constructor() {
    // Simulate the order processing
    this.startOrderProcessing();
  }

  // Start order processing with a simulated progress bar
  startOrderProcessing() {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        this.progressBarWidth = progress;
      } else {
        clearInterval(interval);
        this.confirmOrder();
      }
    }, 500); // Update progress every 500ms
  }

  // After processing, set orderConfirmed to true to show the "Order Confirmed" stage
  confirmOrder() {
    this.orderConfirmed = true;
  }

  // Close confirmation
  closeConfirmation() {
    // Navigate or reset state as needed
  }

}
