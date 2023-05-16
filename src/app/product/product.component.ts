import { Component,OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from'./product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products!:Product[];

  constructor(private productService:ProductService){  
  }

  ngOnInit(){
     this.productService.getProducts()
     .subscribe((data: Product[]) =>{
         this.products=data;
     })
  }

}