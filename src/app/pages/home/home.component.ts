import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public productDetail:any;

  public getProductDetail(product:any){

    console.log(product);
    this.productDetail= product;

  }

  public products:any;

constructor(public apiService:ApiService)
{
  this.apiService.getProducts().subscribe((productResponse)=>{
    console.log(productResponse);
    this.products = productResponse.data;
  
  })
}
}