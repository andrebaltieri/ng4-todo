import { Component } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})

export class AppComponent {
  public tasks: any[] = [];

  constructor(private dataService: DataService) {
    var data = this.dataService.load();
    if (data) {
      this.tasks = data;
    } else {
      this.tasks = [];
    }
  }

  save() {
    this.dataService.save(this.tasks);
  }

  clear() {
    this.dataService.clear();
    this.tasks = [];
  }
}
