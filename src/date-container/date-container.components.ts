import { Component } from '@angular/core';

@Component({
  selector: 'date-container',
  templateUrl: './date-container.component.html',
  styleUrls: ['./date-container.component.css']
})
export class DateContainerComponent {
  data = {
    totalDays: 30
  };

  dates(totalDays) {
    return new Array(totalDays);
  }
}
