import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {FormControl, FormGroup} from '@angular/forms';

import {TuiDialogService} from '@taiga-ui/core';

interface User {
  readonly idCard: string | null;
  readonly email: string | null;
  readonly name: string | null;
  readonly age: number | null;
  readonly phone: string | null;
  readonly benefit: string[] | null;
}

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.less'],
})
export class RegistryComponent  implements OnInit {
  readonly columns = ["idCard", 'name', 'age', "phone",  'email','benefit', 'actions'];
  public mainUser: User[] =[];
  public users: User[] =[];

  open = false;
  title = ""
  titleBtn = ""
  isUpd = true
  benefit :string[] = []
 
  searchForm = new FormGroup({
    searchValue: new FormControl(''),
  });

  addUserForm = new FormGroup({
    idCard: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl(''),
  });

  control = new FormControl<string[] | null>(null);

  
  constructor(
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly ApiService: ApiService) {}

  ngOnInit(): void {
    this.mainUser = this.ApiService.getUsers()
    this.users = this.ApiService.getUsers()
    this.benefit = this.ApiService.getBenefits()
  }
   
  search(): void {
      this.users = this.mainUser.filter(user => user.name!.toLocaleUpperCase().indexOf(this.searchForm.controls.searchValue.value!.toLocaleUpperCase()) > -1 );
    }

  showDialog(index: number ): void {
    if (index < 0) {
      this.isUpd = false
      this.title = "Добавить нового пользователя"
      this.titleBtn = "Добавить" 
    } else {
      this.isUpd = true
      this.title = "Редактировать пользователя"
      this.titleBtn = "Сохранить изменения" 
      this.addUserForm.controls.idCard.setValue(this.users[index].idCard)
      this.addUserForm.controls.email.setValue(this.users[index].email)
      this.addUserForm.controls.name.setValue(this.users[index].name)
      this.addUserForm.controls.age.setValue( String( this.users[index].age))
      this.addUserForm.controls.phone.setValue(this.users[index].phone)
      this.control.setValue(this.users[index].benefit)
    }
    this.open = true;

  }

  addUser() {
    this.users = this.ApiService.addUser(
      {
        idCard: this.addUserForm.controls.idCard.value,
        email: this.addUserForm.controls.email.value,
        name: this.addUserForm.controls.name.value,
        age: Number( this.addUserForm.controls.age.value),
        phone: this.addUserForm.controls.phone.value,
        benefit: this.control.value
      }
    )
      this.addUserForm.reset()
      this.control.reset()

    this.open = false
  }

  updateUser() {
    this.users = this.ApiService.updateUser(
      {
        idCard: this.addUserForm.controls.idCard.value,
        email: this.addUserForm.controls.email.value,
        name: this.addUserForm.controls.name.value,
        age: Number( this.addUserForm.controls.age.value),
        phone: this.addUserForm.controls.phone.value,
        benefit: this.control.value
      }
    )
      this.addUserForm.reset()
      this.control.reset()

    this.open = false
  }
}
