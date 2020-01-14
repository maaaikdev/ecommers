import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleItemService {

  constructor() { }

  private detailId = 0;

  setDetailId(detailId:number){
    this.detailId = detailId;
  }

  getDetailId(): number{
    return this.detailId;
  }
}
