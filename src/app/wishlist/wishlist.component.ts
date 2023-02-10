import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../sevices/api.service';
import { WishlistService } from '../sevices/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist:any

      
wishId:any
  constructor( private api:ApiService,private wlist:WishlistService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.wishId = data['id']
      console.log(this.wishId); 
    })




    if(localStorage.getItem("wishlist")){
      this.wishlist = JSON.parse(localStorage.getItem("wishlist")!);
      console.log( this.wishlist);
    }
  }

  removeItem(product:any){
    let removeItemList = this.wishlist.filter((item:any)=>item.id!=product.id)
    console.log(removeItemList);
    localStorage.setItem("wishlist",JSON.stringify(removeItemList))
    this.wishlist = JSON.parse(localStorage.getItem("wishlist")!)
  }


  

}
