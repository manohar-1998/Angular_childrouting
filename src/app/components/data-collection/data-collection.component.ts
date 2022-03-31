import { Component } from '@angular/core';

export interface Task {
  name: string;
  subtasks?: Task[];
}

@Component({
  selector: 'app-data-collection',
  templateUrl: './data-collection.component.html',
  styleUrls: ['./data-collection.component.css']
})

export class DataCollectionComponent{
  task: Task = {
    name: 'Indeterminate',
    subtasks: [
      {name: 'Temporary'},
      {name: 'Total'},
    ],
  };

}
