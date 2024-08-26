import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../models/productData.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   BASE_URL = `${environment.baseUrl}`;
   PRODUCT_URL:string = `${environment.baseUrl}/products.json`;

  constructor(
    private _http: HttpClient,
    private _snakbarService: SnackbarService
  ) { }

  fetchAllProducts():Observable<Array<Iproduct>>{

    return this._http.get<Array<Iproduct>>(this.PRODUCT_URL)
    .pipe(
       map(data =>{
        let productsArr: Array<Iproduct> =[]
         for (const key in data) {
          productsArr.unshift({...data[key],id:key}) 
         }
         return productsArr
       })
     
    )
  }

  fetchSingleProduct(id: string):Observable<Iproduct>{
    let SINGLE_PRODUCT_URL = `${this.BASE_URL}/products/${id}.json`;

    return this._http.get<Iproduct>(SINGLE_PRODUCT_URL)
  }

  creatNewProduct(product: Iproduct):Observable<{name:string}>{
  this._snakbarService.openSnackBar(`The product is ${product.name} added succesfully !!`)
  
    return this._http.post<{name:string}>(this.PRODUCT_URL,product);
    
  }

  updatedProduct(updatedObj: Iproduct):Observable<Iproduct>{
    let UPDATED_PRODUCT_URL = `${this.BASE_URL}/products/${updatedObj.id}.json`
    this._snakbarService.openSnackBar(`The product is Updated succesfully !!`)
    return this._http.patch<Iproduct>(UPDATED_PRODUCT_URL,updatedObj);
     
  }

  removeProduct(id:string):Observable<null>{
    let REMOVE_URL = `${this.BASE_URL}/products/${id}.json`
    this._snakbarService.openSnackBar(`The product Removed succesfully !!`)
    return this._http.delete<null>(REMOVE_URL)
  }
}

