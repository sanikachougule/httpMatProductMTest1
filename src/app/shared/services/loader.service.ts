import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
loaderSub$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)//
//isLoaderStatus:boolean = false;
  constructor() { }
}
