import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  age: number = 0;
  greeting: string = '';

  updateGreeting() {
    this.greeting = `Hello, ${this.name}! You are ${this.age} years old.`;
  }
}