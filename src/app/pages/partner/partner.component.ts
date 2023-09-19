import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

interface Discount {
  readonly title: string | null;
  readonly desc: string | null;
  readonly start: string | null;
  readonly end: string | null;
}

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.less']
})
export class PartnerComponent implements OnInit {
  public discounts: Discount[] =[];

  open = false;
  title = "Добавить скидку"

  titleBtn = ""
  isUpd = true

  addUserForm = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl(''),
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor (private readonly ApiService: ApiService) {
  }
 
  ngOnInit(): void {
    this.discounts = this.ApiService.getDiscounts()
  }


  showDialog(index: number ): void {
    if (index < 0) {
      this.isUpd = false
      this.title = "Добавить новую скидку"
      this.titleBtn = "Добавить" 
    } else {
      this.isUpd = true
      this.title = "Редактировать скидку"
      this.titleBtn = "Сохранить изменения" 
      // this.addUserForm.controls.idCard.setValue(this.users[index].idCard)
      // this.addUserForm.controls.email.setValue(this.users[index].email)
      // this.addUserForm.controls.name.setValue(this.users[index].name)
      // this.addUserForm.controls.age.setValue( String( this.users[index].age))
      // this.addUserForm.controls.phone.setValue(this.users[index].phone)
    }
    this.open = true;

  }

  addDiscounts() {
    this.discounts = this.ApiService.addDiscounts(
      {
        title: this.addUserForm.controls.title.value,
        desc: this.addUserForm.controls.desc.value,
        start: this.addUserForm.controls.start.value,
        end: this.addUserForm.controls.end.value,
      }
    )
      this.addUserForm.reset()

    this.open = false
  }

  updateDiscounts() {
    // this.users = this.ApiService.updateUser(
    //   {
    //     idCard: this.addUserForm.controls.idCard.value,
    //     email: this.addUserForm.controls.email.value,
    //     name: this.addUserForm.controls.name.value,
    //     age: Number( this.addUserForm.controls.age.value),
    //     phone: this.addUserForm.controls.phone.value,
    //     benefit: this.control.value
    //   }
    // )
      this.addUserForm.reset()

    this.open = false
  }
}
