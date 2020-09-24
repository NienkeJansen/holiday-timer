import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  n = 0;

  ngOnInit() {
    window.setInterval(() => {
      if (this.n <= 4) {
        this.n++;
      } else {
        this.n = 0;
      }
    }, 2000);
  }
}
