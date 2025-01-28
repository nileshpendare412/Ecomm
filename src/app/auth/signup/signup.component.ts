import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  singupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })


  constructor(){

  }

  signUp(){
    alert("User account created successfully...")
    console.warn(this.singupForm);
  }
  
}