import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;  // Track if the user is logged in

  onLogin() {
    // Validate form fields (just checking if they're filled out)
    if (this.email && this.password) {
      // Simulate login success (In real-world, you would make an API call to authenticate)
      const loginData = {
        email: this.email,
        password: this.password, // Note: In a real application, don't store raw passwords in localStorage!
      };

      // Save login data to localStorage
      localStorage.setItem('userLoginData', JSON.stringify(loginData));

      // Set the isLoggedIn flag to true and show the success alert
      this.isLoggedIn = true;
      alert('Login Successful!');


    } else {
      alert('Please fill in both fields!');
    }
  }
}
