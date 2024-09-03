import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;

    if(this.counter < 1){
      this.counter = 0;
    }
  }

  resetCounter() {
    this.counter = 0;
  }
}
