import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  @Input() tasks: any[] = [];

  constructor() { }

  ngOnInit() {

  }
}