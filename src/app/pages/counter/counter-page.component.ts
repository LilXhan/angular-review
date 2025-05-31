import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 10px;
      margin: 5px 10px;
      width: 75px
    }
  `
})
export class CounterPageComponent {
  protected counter = 10;
  protected counterSignal = signal(10);

  // constructor() {
  //   setInterval(() => {
  //     this.increaseBy(1);
  //     console.log('tick');
  //   }, 2000);
  // }


  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current += 1);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update(current => current -= 1);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}