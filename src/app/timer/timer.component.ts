import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  eersteVakantieDag: any = new Date('Dec 24, 2022 16:00:00');
  eersteWerkdag: any = new Date('Jan 2, 2023 07:00:00');
  daysToHoliday: number;
  hoursToHoliday: number;
  minutesToHoliday: number;
  secondsToHoliday: number;
  message: string;
  loading: boolean;
  comingUp: boolean;

  constructor() {
  }

  ngOnInit() {
    this.loading = true;
    window.setInterval(() => this.setTimer(), 1000);
  }

  private setTimer() {
    const now = new Date().getTime();
    let difference = this.eersteVakantieDag - now;
    if (difference > 0) {
      this.message = 'tot Kerst';
      this.comingUp = true;
      this.getTime(difference);
    } else {
      difference = this.eersteWerkdag - now;
      if (difference > 0) {
        this.message = 'Het is Kerst';
        this.getTime(difference);
        this.comingUp = true;
      } else {
        this.message = 'Het duurt nog wel een tijdje voor het kerst is';
        this.comingUp = false;
      }
    }
    this.loading = false;
  }

  private getTime(difference: number) {
    this.daysToHoliday = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hoursToHoliday = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutesToHoliday = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.secondsToHoliday = Math.floor((difference % (1000 * 60)) / 1000);
  }
}
