import { Component, OnInit } from '@angular/core';

export type Decision = 'undecided' | 'yes' | 'no';

@Component({
  selector: 'app-climate-change-table',
  templateUrl: './climate-change-table.component.html',
  styleUrls: ['./climate-change-table.component.scss']
})
export class ClimateChangeTableComponent implements OnInit {

  private message: string;
  public decision: Decision;

  constructor() {
    this.message = 'Pick a Row!';
    this.decision = 'undecided';
  }

  ngOnInit() {
  }

  takeAction() {
    this.message = 'to take action now!';
    this.decision = 'yes';
  }

  dontTakeAction() {
    this.message = 'NOT to take action now!';
    this.decision = 'no';
  }

}
