import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { IProduct } from '../../interfaces/product';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnInit{

  products: Array<IProduct> = [];

  constructor(private _productService : ProductService) {}

  ngOnInit() 
  {
    this._productService.getProducts().subscribe( data => {this.products = data.products
       console.log(this.products);
    });
  }

}
