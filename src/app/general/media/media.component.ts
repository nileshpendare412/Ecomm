// import { Product } from 'src/app/view/api/product';
// import { PhotoService } from 'src/app/view/service/photo.service';
// import { ProductService } from 'src/app/view/service/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {

  // products!:Product[];

  images!: any[];

  galleriaResponsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '960px',
          numVisible: 4
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  carouselResponsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  // constructor(private ProductService: ProductService, private photoService: PhotoService) { }

  ngOnInit() {
      // this.productService.getProductsSmall().then(this.products => {
      //     // this.products = products;
      //     this.products = this.products;
      // });

      // this.photoService.getImages().then(images => {
      //     this.images = images;
      // });
  }


}
