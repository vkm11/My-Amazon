import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { products } from '../shared/models/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:products[]=[];
  constructor(private fs:ProductService) { }

  ngOnInit(): void {
    this.products = this.fs.getAll();
  }

}
