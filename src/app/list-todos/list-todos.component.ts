import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  todos = [
    {
      id: 1,
      description: 'Learn to Dance',
    },
    {
      id: 2,
      description: 'Learn to Sing',
    },
    {
      id: 3,
      description: 'Learn to Cook',
    },
    {
      id: 4,
      description: 'Learn to Drive',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
