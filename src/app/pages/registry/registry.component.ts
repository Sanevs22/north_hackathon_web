import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.less'],
})
export class RegistryComponent {
  constructor(private readonly ApiService: ApiService) {}

  click() {
    this.ApiService.console();
  }
}
