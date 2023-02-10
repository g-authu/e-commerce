import { Component, OnInit } from '@angular/core';
import { ApiService } from '../sevices/api.service';
import { WishlistService } from '../sevices/wishlist.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  productDetails:any
  search:any
  constructor(private api:ApiService,private wlist:WishlistService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe((result:any)=>{
      this.productDetails = result.products
      console.log(this.productDetails);
      

    })

      this.api.searchTerm.subscribe((data)=>{
          this.search = data
          
      })
  }

  addToWishlist(product:any){
      this.wlist.addToWlist(product)
      alert("Product Added To Wishlist")
  }

  searchs(event:any){
    let searchValue = event.target.value
    this.api.searchTerm.next(searchValue)
  }

}
