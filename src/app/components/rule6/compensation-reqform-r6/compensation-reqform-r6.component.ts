import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compensation-reqform-r6',
  templateUrl: './compensation-reqform-r6.component.html',
  styleUrls: ['./compensation-reqform-r6.component.css']
})
export class CompensationReqformR6Component implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
