import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent {
   data = [{
    productCode: "1001",
    productName: 'iphone',
    manuDate: '12-12-2022',
    expDate: '12-12-2030',
    brand: 'apple',
    price: '150000',
    sellarName: 'apple',
    distributor: 'apple',
  }]
}
