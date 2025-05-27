import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../interfaces/product';
import { Observable } from 'rxjs';

interface IProductApiResponse 
{
  products: Array<IProduct>,
  total: number,
  skip: number,
  limit: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "https://dummyjson.com/products";
  constructor(private http: HttpClient ) { }

  getProducts() : Observable<IProductApiResponse>
  {
    return this.http.get<IProductApiResponse>(this._url)
  }
}
