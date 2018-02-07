import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
  <div>
    <h3> hello my name is {{ name }} </h3>
  </div>
  `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  name = "Edgaras Grigas";

  constructor() { }

  ngOnInit() {
  }

}
