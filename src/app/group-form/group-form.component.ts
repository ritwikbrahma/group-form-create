import { Component, OnInit } from '@angular/core';
import { Group } from '../group';


@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  model = new Group('TEKThak','Lets discuss','everybody');

  submitted = false;

  onSubmit()
  {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
