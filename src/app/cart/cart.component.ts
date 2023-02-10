import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../sevices/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products=[]
  totalPrice=0
  constructor(private cartService : CartService , private router:Router) { }

  ngOnInit(): void {


}
  
  
 
}
