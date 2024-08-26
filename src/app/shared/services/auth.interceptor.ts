import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { SelectorMatcher } from '@angular/compiler';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('API Triggered');
    this._loaderService.loaderSub$.next(true)
    const token = 'JWT token form LS'
     const reqClone= request.clone({
      setHeaders:{
        "Content-type":"applications/json",
        "Token":token
      }
     })
  
     
      
    return next.handle(reqClone)
     .pipe(
       finalize(()=>{
           this._loaderService.loaderSub$.next(false)
       })
     )
  }
}
