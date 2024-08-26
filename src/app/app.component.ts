import { Component, inject, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'httpMatProductsMTest1';
 isLoaderStatus: boolean= false;
  private _loaderService = inject(LoaderService)
  ngOnInit(): void {
    this._loaderService.loaderSub$
    .subscribe(res =>{
        console.log(res)
        this.isLoaderStatus =res
    })
 
}
}