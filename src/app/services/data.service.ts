import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  save(data: any[]) {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  load(): any[] {
    var data: any[] = JSON.parse(localStorage.getItem('tasks'));
    return data;
  }

  clear() {
    localStorage.clear();
  }
}
