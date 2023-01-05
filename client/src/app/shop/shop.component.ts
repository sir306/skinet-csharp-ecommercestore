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
  brandIdSelected: number = 0;
  typeIdSelected: number = 0;
  sortSelected = 'name';
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getProductTypes();
  }

  getProducts() {
    this.shopService
      .getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected)
      .subscribe({
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
        this.brands = [{ id: 0, name: 'All' }, ...response];
      },
      error: (e) => console.log(e),
      complete: () => console.info('Brands retrieved'),
    });
  }

  getProductTypes() {
    this.shopService.getProductTypes().subscribe({
      next: (response) => {
        this.productTypes = [{ id: 0, name: 'All' }, ...response];
      },
      error: (e) => console.log(e),
      complete: () => console.info('Types retrieved'),
    });
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

  onSortSelected(sort:string)
  {
    this.sortSelected = sort;
    this.getProducts();
  }
}
