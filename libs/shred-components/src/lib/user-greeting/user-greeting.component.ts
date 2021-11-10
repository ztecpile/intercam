import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'idb-user-greeting',
  templateUrl: './user-greeting.component.html',
  styleUrls: ['./user-greeting.component.css'],
})
export class UserGreetingComponent implements OnInit {
  @Input() name: string;
  @Input() imageUrl: string;
  @Input() now = new Date();

  message = '';

  ngOnInit(): void {
    this.setMessage();
  }

  setMessage(): void {
    const hour = this.now.getHours();

    if (hour >= 0 && hour < 12) {
      this.message = 'userGreeting.good-morning-message';
    }

    if (hour >= 12 && hour < 18) {
      this.message = 'userGreeting.good-afternoon-message';
    }

    if (hour >= 18 && hour < 24) {
      this.message = 'userGreeting.good-night-message';
    }
  }
}
