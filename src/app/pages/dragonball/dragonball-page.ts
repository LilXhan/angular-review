import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
  imports: [NgClass]
})
export class DragonballPage {

  protected name = signal('');
  protected power = signal(0);

  protected characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3000 },
    // { id: 4, name: 'Yamcha', power: 500}
  ]);

  addCharacter() {
    if ( !this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
      this.name.set('');
      this.power.set(0);
    }

  
  // protected powerClases = computed(() => {
  //   return {
  //     'text-danger': true
  //   };
  // });
}
