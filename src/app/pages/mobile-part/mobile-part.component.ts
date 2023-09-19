import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-mobile-part',
  templateUrl: './mobile-part.component.html',
  styleUrls: ['./mobile-part.component.less']
})
export class MobilePartComponent {
  text = "Чтение Mifare чипа карты ЕКЖ средствами NFC и определение размера скидки"

  user :any
  
  discounts: any[] =[]
loud = false

  
  constructor(
  
    private readonly ApiService: ApiService) {}
  
     scan() {
      this.loud = true;
       setTimeout(()=>{
        this.user =  this.ApiService.getUsers()[0]!
        this.discounts = this.ApiService.getDiscounts()
        this.loud = false;
      }, 1000)
    }
  
 
  
}




