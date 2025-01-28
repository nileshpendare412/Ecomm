import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { faTrowel } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  productData: any = [];
  errorMessage: string = '';
  displayCount: number = 12;

  // Flag to toggle visibility of the items section
  isItemListVisible = false;

  // Define the products array and initialize it as empty
  products: any[] = [];
  responsiveOptions: any;

  // Papad items (this is for initial hardcoded products)
  papadItems = [
    { image: '../../../assets/p1.jpeg', name: 'Papad', weight: '500g', rating: '★★★★☆', discount: '10%', price: '$5.99' },
    { image: '../../../assets/p2.jpeg', name: 'Papad', weight: '500g', rating: '★★★★☆', discount: '10%', price: '$5.99' },
    { image: '../../../assets/p3.jpeg', name: 'Masala Papad', weight: '500g', rating: '★★★★☆', discount: '10%', price: '$5.99' },
    { image: '../../../assets/p4.jpeg', name: 'Roasted Papad', weight: '500g', rating: '★★★★☆', discount: '10%', price: '$5.99' },
    { image: '../../../assets/p5.jpeg', name: 'Fry Papad', weight: '500g', rating: '★★★★☆', discount: '10%', price: '$5.99' },
    { image: '../../../assets/p6.jpeg', name: 'Fry Papad', weight: '500g', rating: '★★★★☆', discount: '10%', price: '$5.99' },
    { image: '../../../assets/p7.jpeg', name: 'Papad', weight: '500g', rating: '★★★★☆', discount: '10%', price: '$5.99' },
    { image: '../../../assets/p8.jpeg', name: 'Papad', weight: '500g', rating: '★★★★☆', discount: '10%', price: '$5.99' }
  ];

  constructor(private http: HttpClient) {}

  // Toggle the visibility of the item list
  toggleItemList() {
    this.isItemListVisible = !this.isItemListVisible;
  }
  ngOnInit(): void {
    this.findProducts();
  }

  // Method to fetch products from the API
  findProducts() {
    this.http.get('https://freeapi.miniprojectideas.com/api/BigBasket/GetAllProducts').subscribe(
      (res: any) => {
        if (res.result) {
          // Assuming the products data is inside `res.data` (check the API response structure)
          this.products = res.data;
          // alert('Found all products');
          console.log(res);
        } else {
          this.errorMessage = res.message || 'Something went wrong';
          alert(this.errorMessage);
        }
      },
      (error) => {
        this.errorMessage = 'Failed to load products. Please try again later.';
        // alert(this.errorMessage);
        console.error('API call failed', error);
      }
    );
  }
  seeMore() {
    if (this.displayCount === 12) {
      this.displayCount = 25; // After 12, show 25 products
    } else {
      this.displayCount += 25; // Increment by 25 each time the button is clicked
    }
  }
}
