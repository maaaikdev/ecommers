import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  listProducts = [];
  viewItems = false;
  actualPage: number = 1;
  filterPost = '';

  constructor(public itemService: ItemsService) { }

  ngOnInit() {
  this.itemService.getItems().subscribe(
      result => {
        // this.listProducts = result.slice(0,100);
        this.listProducts = result;
        this.listProducts.forEach(element => {
          console.log(element);
        });
        this.viewItems = true;
      }
    );
  }
}
