import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private api:ApiService,private route:Router){}
        productCode= ""
        productName= ""
        manuDate= ""
        expDate=""
        brand= ""
        price= ""
        sellarName= ""
        distributor=""
        errormessage=null;

         readValue=()=>{
          let data:any={
            "productCode":this.productCode,
            "productName":this.productName,
            "manuDate":this.manuDate,
            "expDate":this.expDate,
            "brand":this.brand,
            "price":this.price,
            "sellarName":this.sellarName,
            "distributor":this.distributor,
          }
          this.api.sendData(data).subscribe(
            (response:any)=>{
              console.log(response)
              if(response.status=="success"){
                alert("ok")
              }else{
                alert("failed")
              }
            }
          )
          this.route.navigate(["/"])
         }

}
