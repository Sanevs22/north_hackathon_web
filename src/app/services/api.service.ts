import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public console() {
    console.log(22);
  }
}
