import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

// icon = faTrash;

//   productList: any[] = [];

//   constructor() {
//     this.loadProducts();
// }

// loadProducts() {
//   if (typeof window !== 'undefined') { // Check if window is available
//     const storedProducts = localStorage.getItem("products");
//     if (storedProducts) {
//       this.productList = JSON.parse(storedProducts);
//     }
//   }
// }
// deleteProduct(){
//   alert("Delete product successfully....")
// }
productData: any = [];
  errorMessage: string = '';
  displayCount: number = 12;

  // Flag to toggle visibility of the items section
  isItemListVisible = false;

  // Define the products array and initialize it as empty
  products: any[] = [];
  responsiveOptions: any;

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