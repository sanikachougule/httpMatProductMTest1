import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/productData.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input() productObj !: Iproduct;
  constructor() { }

  ngOnInit(): void {
  }

}
