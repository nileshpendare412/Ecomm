import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  EditproductForm = new  FormGroup({

  productname: new FormControl(''),
  productprice: new FormControl(''),
  productcolour: new FormControl(''),
  productcategory: new FormControl(''),
  discription: new FormControl(''),
  productimage: new FormControl('')
});

updateProduct() {
  alert("Product updated successfully.....")
}

}
