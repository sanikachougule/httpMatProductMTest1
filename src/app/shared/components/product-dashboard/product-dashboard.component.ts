import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/productData.interface';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productsArr !: Array<Iproduct>;

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.productService.fetchAllProducts()
        .subscribe(res =>{
           console.log(res)
           this.productsArr = res
        })
  }

}
