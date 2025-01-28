import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLink, RouterOutlet} from '@angular/router';
import { FooterComponent } from './general/footer/footer.component';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { BehaviorSubject } from 'rxjs';


interface Car { 
  id?: string; 
  name?: string; 
  description?: string; 
  price?: number; 
} 



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  cartItem:any =[];
  cardItemCount:any = new BehaviorSubject<number>(0); 

  private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);  // Observable for cart count

  showPopup = false;  // To manage the visibility of the success message


   // Initial list of items
   items = [
    { name: 'Mango Pickle', weight: '500g', image: '../../../assets/Pickle Label Design.jpeg', price: 500, rating: 4 },
    { name: 'Mango Pickle', weight: '300g', image: '../../../assets/Pickle Label Design.jpeg', price: 300, rating: 3 },
    { name: 'Mango Pickle', weight: '1000g', image: '../../../assets/Pickle Label Design.jpeg', price: 700, rating: 5 },
    { name: 'Lemon Pickle', weight: '500g', image: '../../../assets/images (6).jpeg', price: 500, rating: 4 },
    { name: 'Papad', weight: '250g', image: '../../../assets/p5.jpeg', price: 200, rating: 4 },
    { name: 'Chilli Pickle', weight: '250g', discount: 10, image: '../../../assets/images (15).jpeg', price: 200, rating: 4 },
    { name: 'Goosberry Pickle', weight: '500g', discount: 10, image: '../../../assets/download (2).jpeg', price: 250, rating: 4 },
    { name: 'Kurkure', weight: '500g', discount: 10, image: '../../../assets//k1.jpeg', price: 250, rating: 4 },
    // Add more items here...
  ];

  // Holds the filtered items based on the search
  filteredItems: any[] = [];

  // Holds the current search query
  searchQuery: string = '';

  // Function to search through products
  searchProduct(event: any) {
    this.searchQuery = event.target.value.toLowerCase();  // Get input and make it case-insensitive

    if (this.searchQuery) {
      // Filter items based on the search query matching the product name, weight, or price
      this.filteredItems = this.items.filter(item => 
        item.name.toLowerCase().includes(this.searchQuery) ||   // Match name
        item.weight.toLowerCase().includes(this.searchQuery) || // Match weight
        item.price.toString().includes(this.searchQuery)         // Match price
      );
    } else {
      // If searchQuery is empty, clear filteredItems (i.e., hide the list)
      this.filteredItems = [];
    }
  }
  // Add item to cart and show the success message
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
    this.router.navigate(['/cart']);
  }

  // Other methods like `openPriceDetails()` can go here
  openPriceDetails() {
    console.log('Open price details');
  }
icon = faCartShopping;

  title = 'e-commerce';
  // backgroundImageUrl = 'path/to/your/image.jpg';
  backgroundImageUrl = '../assets/images/bg11.jpg'
  // backgroundImageUrl = '../assets/Pickle Label Design.jpeg';
  // backgroundImageUrl = '../assets/Pickle Label Design.jpeg';

  cars: Car[] = []; 
  
  
  constructor(
 private cartService: CartService,
    private router: Router  // Inject Router service
  ) { } 
  // searchProduct(query: KeyboardEvent){
  //   if(query){
  //     const element = query.target as HTMLInputElement;
  //     console.warn(element.value)
  //   }
  //   }
    // Update cart in localStorage and emit the updated count
  private updateCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItem));  // Update localStorage
    this.cartItemCountSubject.next(this.cartItem.length);  // Emit updated cart count
  }

  ngOnInit() { 
    
      // Retrieve cart items from the service
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItem= JSON.parse(storedCartItems);
    } else {
      // this.cartItem= this.cartService.getCartItems();
    }

    // Emit the initial count of items in the cart
    this.cartService.getCartItemCount$().subscribe(count => {
      this.cardItemCount = count; // Update the cart count when it changes
      console.log(this.cardItemCount, 'Updated Cart Item Count');
    });

    // Update the count initially if cart items are present in localStorage or the service
    this.cardItemCount = this.cartItem.length;
  }
  removeFromCart(item: any): void {
    const index = this.cartItem.indexOf(item);
    if (index > -1) {
      this.cartItem.splice(index, 1);  // Remove item from cart
      this.updateCart();
      // Update localStorage with the modified cart items
      localStorage.setItem('cartItems', JSON.stringify(this.cartItem));

     // Emit the initial count of items in the cart
     this.cartService.getCartItemCount$().subscribe(count => {
      this.cardItemCount = count; // Update the cart count when it changes
      console.log(this.cardItemCount, 'Updated Cart Item Count');
    });
      // Optionally update the cardItemCount directly in the component
      this.cardItemCount = this.cartItem.length;
    }
    
  
      this.cars = [ 
          { 
              id: '1', 
              name: 'Bugatti', 
              description: 'Racing car', 
              price: 800, 
          }, 
          { 
              id: '2', 
              name: 'Ferrari', 
              description: 'The Prancing Horse', 
              price: 1500, 
          }, 
          { 
              id: '3', 
              name: 'Porsche', 
              description: 'Full spectrum', 
              price: 10000, 
          }, 
      ]; 

    }
  }
