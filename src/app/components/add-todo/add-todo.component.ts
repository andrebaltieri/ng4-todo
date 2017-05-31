import { Input, Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  providers: [FormBuilder, DataService]
})

export class AddTodoComponent implements OnInit {
  @Input() tasks: any[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      task: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  add() {
    this.tasks.push({
      id: this.tasks.length + 1,
      title: this.form.value.task,
      done: false
    });
    this.dataService.save(this.tasks);
  }
}
