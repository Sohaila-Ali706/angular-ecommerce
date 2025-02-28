import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  standalone: false,
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.css'
})
export class CountdownTimerComponent {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  targetDate: Date = new Date('2025-03-01T00:00:00'); // غيري التاريخ حسب الحاجة

  ngOnInit() {
    this.updateCounter();
    setInterval(() => {
      this.updateCounter();
    }, 1000);
  }

  updateCounter() {
    const now = new Date().getTime();
    const timeLeft = this.targetDate.getTime() - now;

    this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
}




 
  
  }

