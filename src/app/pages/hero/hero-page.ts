import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe]
})
export class HeroPage {
  protected name = signal('Ironman');
  protected age = signal(45);
  
  protected heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  })

  protected capitalizedName = computed(() => {
    const capitalize = this.name().toUpperCase();
    return capitalize;
  }) 

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeHeroAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}