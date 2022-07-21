import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAll():string[]{
    return[ 
      '/assets/tv5.png',
      '/assets/tv5.png',
      '/assets/tv5.png'
    ]
  }
}
