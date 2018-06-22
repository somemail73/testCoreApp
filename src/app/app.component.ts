import { Component } from '@angular/core';
import { StoreService, ServiceWithConfiguredParam } from 'somemail73-test-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private storeService: StoreService, private serviceWithConfiguredParam: ServiceWithConfiguredParam) {}

  increment() {
    this.serviceWithConfiguredParam.testConfiguration();
    this.storeService.increment();
  }

  title = 'app';
}
