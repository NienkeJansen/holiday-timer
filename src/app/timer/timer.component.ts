import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  eersteKerstDag: Date;
  laatsteKerstDag: Date;
  today = new Date();
  daysToHoliday: number;
  hoursToHoliday: number;
  minutesToHoliday: number;
  secondsToHoliday: number;
  message: string;
  loading: boolean;
  comingUp: boolean;

  ngOnInit() {
    this.loading = true;
    this.eersteKerstDag = this.setKerstdag(24, 16);
    this.laatsteKerstDag = this.setKerstdag(28, 7);
    window.setInterval(() => this.setTimer(), 1000);
  }

  private setKerstdag(dag: number, tijd: number) {
    const kerstdag = new Date();
    kerstdag.setFullYear(this.today.getFullYear(), 11, dag);
    kerstdag.setHours(tijd, 0, 0);
    return kerstdag;
  }

  private setTimer() {
    const now = new Date().getTime();
    let difference = this.eersteKerstDag.getTime() - now;
    if (difference > 0) {
      this.message = 'tot Kerst';
      this.getTime(difference);
    } else {
      difference = this.laatsteKerstDag.getTime() - now;
      if (difference > 0) {
        this.message = 'Het is Kerst';
        this.getTime(difference);
      } else {
        const eersteKerstdagVolgendJaar = this.setKerstdag(24, 16).setFullYear(this.today.getFullYear() + 1);
        difference = eersteKerstdagVolgendJaar - now;
        this.message = 'tot Kerst';
        this.getTime(difference);
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
