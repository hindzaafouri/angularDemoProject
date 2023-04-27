import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listProduct!: Product[] ;
  listProductByPrice !: Product[] ;

  priceMax!: number ; 
  
  constructor() { }

  likeProduct(i:number) {
    this.listProduct[i].likes++ ;
  }

  buyProduct(i:number) {
    this.listProduct[i].quantity-- ;
  }


  ngOnInit(): void {
    this.listProduct = [
      { id: 1 , title: 'T-shirt1' , price: 20 , quantity: 5 , likes:2 } , 
      { id: 2 , title: 'T-shirt2' , price: 54 , quantity: 5 , likes:2 } , 
      { id: 3 , title: 'T-shirt3' , price: 16 , quantity: 5 , likes:2 }

    ]
  }

}
