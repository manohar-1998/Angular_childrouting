import { Component, OnInit } from '@angular/core';
export interface Task {
  name: string;
  subtasks?: Task[];
}
@Component({
  selector: 'app-medical-history-copy-r26',
  templateUrl: './medical-history-copy-r26.component.html',
  styleUrls: ['./medical-history-copy-r26.component.css']
})
export class MedicalHistoryCopyR26Component {

  task: Task = {
    name: 'Indeterminate',
    subtasks: [
      {name: 'Temporary'},
      {name: 'Total'},
    ],
  };
  
  constructor() { }


}
