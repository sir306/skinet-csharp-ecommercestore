import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // properties
  title = 'SkiNet';
  products: IProduct[];

  // constructor
  constructor(private http: HttpClient) { }

  // lifestyle hooks
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: (response: IPagination) => this.products = response.data,
      error: (e) => console.error(e),
      complete: () => console.info('complete', this.products)
    })
  }
}
