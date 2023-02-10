import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
wishList = new BehaviorSubject([])

wishListArray = []
  constructor() { }

  addToWlist(product:any){
    this.wishListArray.push(product as never)
    localStorage.setItem("wishlist",JSON.stringify(this.wishListArray))
  }
}
