import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IProduct } from '../shared/models/product';
import { IProductType } from '../shared/models/ProductType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  productTypes: IProductType[];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getProductTypes();
  }

  getProducts() {
    this.shopService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
      error: (e) => console.log(e),
      complete: () => console.info('Products retrieved'),
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: (response) => {
        this.brands = response;
      },
      error: (e) => console.log(e),
      complete: () => console.info('Brands retrieved'),
    });
  }

  getProductTypes() {
    this.shopService.getProductTypes().subscribe({
      next: (response) => {
        this.productTypes = response;
      },
      error: (e) => console.log(e),
      complete: () => console.info('Types retrieved'),
    });
  }
}
