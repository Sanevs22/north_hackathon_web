import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mobile-cont',
  templateUrl: './mobile-cont.component.html',
  styleUrls: ['./mobile-cont.component.less']
})
export class MobileContComponent {

loud = false
updLoud = false


text = "Чтение чипа карты ЕКЖ средствами NFC и определение типа льготы, имени владельца, месяца и года рождения"

user :any

date = "13 Sep 2023"

constructor(

  private readonly ApiService: ApiService) {}

   scan() {
    this.loud = true;
     setTimeout(()=>{
      this.user =  this.ApiService.getUsers()[0]!
      this.loud = false;
    }, 1000)
  }

  update() {
    this.updLoud = true;
     setTimeout(()=>{
      this.updLoud = false;   
      this.date = Date().split(" ")[2] + " "+ Date().split(" ")[1] + " " + Date().split(" ")[3]
    }, 1000)
  }
}
