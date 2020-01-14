import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private api = 'https://jsonplaceholder.typicode.com'
  itemsProducts;
  

  constructor(private http: HttpClient) {
    this.itemsProducts = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getItems(): any{
    return this.http.get(`${this.api}/photos`,this.itemsProducts).pipe();
  }

  getId(id:any): any{
    return this.http.get(`${this.api}/photos/${id}`,this.itemsProducts).pipe();
  }

}
