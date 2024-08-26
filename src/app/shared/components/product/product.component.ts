import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/productData.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { MatCardActions } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId !: string;
  productObj !: Iproduct;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
    private _dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
   this. getSingleProduct()
  }
  
  getSingleProduct(){
    this.productId = this._route.snapshot.params['productId'];
       this._productService.fetchSingleProduct(this.productId)
       .subscribe(res =>{
          console.log(res)
          this.productObj = res;
       })
  }

  onRemoveProduct(){
     let dialogConf= new MatDialogConfig();
     dialogConf.width= '500px';
     dialogConf.data = `Are You Sure the Remove this Product?`;
   dialogConf.disableClose= true;
   let matDialobRef = this._dialogRef.open(ConfirmComponent, dialogConf)
   matDialobRef.afterClosed()
    .subscribe(res =>{
      if(res){
        this._productService.removeProduct(this.productId)
        .subscribe(res =>{
          console.log(res)
          this._router.navigate(['products'])
        })
      }
    })
  }
}
