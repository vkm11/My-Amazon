import { Injectable } from '@angular/core';
import{ products } from 'src/app/shared/models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAll():products[]{
    return[ 
      {
        id:1,
        name:'V-TV',
        offerTime:'10-20',
        price: 27999,
        favorite:false,
        origins:'india',
        star: 4.5,
        imageUrl:'/assets/TV/tv1.jpeg',
        tags:['TV','MI','LED'],
      },
      {
        id:2,
        name:'MI-TV',
        offerTime:'10-20',
        price: 25999,
        favorite:false,
        origins:'india',
        star: 4.5,
        imageUrl:'/assets/TV/tv1.jpeg',
        tags:['TV','MI','LED'],
      },
      {
        id:3,
        name:'LG-TV',
        offerTime:'10-20',
        price: 10999,
        favorite:false,
        origins:'india',
        star: 4.5,
        imageUrl:'/assets/TV/tv1.jpeg',
        tags:['TV','MI','LED'],
      },
      {
        id:4,
        name:'Vijay-TV',
        offerTime:'10-20',
        price: 29000,
        favorite:false,
        origins:'india',
        star: 4.5,
        imageUrl:'/assets/TV/tv1.jpeg',
        tags:['TV','MI','LED'],
      }
    ]
  }
}
