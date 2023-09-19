import { Injectable } from '@angular/core';

interface User {
  readonly idCard: string | null;
  readonly email: string | null;
  readonly name: string | null;
  readonly age: number | null;
  readonly phone: string | null;
  readonly benefit:  string[] | null;
}

interface Discount {
  readonly title: string | null;
  readonly desc: string | null;
  readonly start: string | null;
  readonly end: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {

   constructor() {
   this.start()
  }


 async start(){
    if(localStorage.getItem("store")) {
      this.users = await JSON.parse( localStorage.getItem("store")!).users
      this.discounts = await JSON.parse( localStorage.getItem("store")!).discounts
     }
     if(!this.users.length){
       this.users = []
     }
     
     if(!this.discounts ){
       this.discounts = []
     }
  }
  
  users:  User[] = [
    {
      idCard : "1",
        name: 'Петя',
        age:32,
        email: 'm.palin@montypython.com',
        phone: "8192121231",
        benefit: ['Проезд', "Путешествия", "Рестораны"],
    },
    {
      idCard : "2",
        name: 'Катя',
        age:16,

        email: 'e.idle@montypython.com',
        phone: "8192121231",
        benefit: ['Проезд', "Рестораны"],
    },
    {
      idCard : "3",
        name: 'Коля',
        age:24,

        email: 'j.cleese@montypython.com',
        phone: "8192121231",
        benefit: [ "Рестораны"],
    },
    {
      idCard : "4",
        name: 'Ольга Петровна',
        age: 65,

        email: '',
        phone: "8192121231",
        benefit: ['Проезд',],
    },
    {
      idCard : "5",
        name: 'Тема',
        age: 18,
        email: 't.gilliam@montypython.com',
        phone: "8192121231",
        benefit: [],
    },
    {
        idCard : "6",
        name: 'Григорий',
        age: 55,

        email: '',
        phone: "8192121231",
        benefit: [ "Путешествия"],
    },
];

  public getUsers () {
    this.users.sort((a, b) => Number(a.idCard) - Number(b.idCard))
    return this.users
  }

  benefits: string[] =  [  
    'Проезд',
    "Путешествия",
    "Рестораны"
  ];
  
  public getBenefits (){
    return this.benefits
  }

  addUser(user:User) {
    this.users.push(user)
    this.users.sort((a, b) => Number(a.idCard) - Number(b.idCard))
    localStorage.setItem("store", JSON.stringify( {
      users: this.users,
      discounts : this.discounts
    }))
    return this.users
  }

  updateUser(user:User) {
    this.users =  this.users.filter(i => i.idCard !== user.idCard)
    this.users.push(user)
    this.users.sort((a, b) => Number(a.idCard) - Number(b.idCard))
    localStorage.setItem("store", JSON.stringify( {
      users: this.users,
      discont : this.discounts
    }))
    return this.users
  }

  discounts: Discount[] =[
    {  title: "Скидка на проезд",
       desc: "Для всех, кто старше 50",
       start: "2023-09-28",
       end: "2023-09-29"
      }
  ];

  getDiscounts() {
    return this.discounts
  }

  addDiscounts(discount: any) {
    this.discounts.push(discount)
    localStorage.setItem("store", JSON.stringify( {
      users: this.users,
      discounts : this.discounts
    }))
    return this.discounts
  }
}
