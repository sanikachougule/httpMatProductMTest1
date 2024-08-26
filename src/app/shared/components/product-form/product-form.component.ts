import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/productData.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm !: FormGroup;
  productId !: string;
 productObj !:Iproduct;
 isInEditMode:boolean = false;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) { }

  ngOnInit(): void {
    this.createProductForm()
     this.handleFormMode()
  }
  
  handleFormMode(){
      this.productId = this._route.snapshot.params['productId'];
      if(this.productId){
         this.isInEditMode = true;
        this._productService.fetchSingleProduct(this.productId)
         .subscribe(res=>{
          console.log(res)
          //this.productObj = res;
          this.productForm.patchValue(res)
         })
      }else {
        this.isInEditMode =false;
      }
  }

  createProductForm(){
    this.productForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      imgUrl: new FormControl(null,[Validators.required]),
      status: new FormControl(null,[Validators.required])
    })
  }
  onProductAdd(){
    if(this.productForm.valid){
        let newObj = this.productForm.value;
         console.log(newObj);
         this.productForm.reset();
         this._productService.creatNewProduct(newObj)
           .subscribe(res=>{
              this._router.navigate(['products'])
           })
    }

  }

  onUpdatedproduct(){
    if(this.productForm.valid){
      let updatedObj = {...this.productForm.value, id:this.productId}
      console.log(updatedObj)
      this._productService.updatedProduct(updatedObj)
      .subscribe(res =>{
            this.productForm.reset();
            this._router.navigate(['products'])
      })
    }
  }
}
