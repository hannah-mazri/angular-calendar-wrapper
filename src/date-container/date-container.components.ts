import { Component } from '@angular/core';

@Component({
  selector: 'app-date-container',
  templateUrl: './date-container.component.html',
  styleUrls: ['./date-container.component.css']
})
export class DateContainerComponent {
  data = {
    totalDays: 30
  };

  dates(totalDays: number) {
    return new Array(totalDays);
  }
}
