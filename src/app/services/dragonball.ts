import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
}
@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  public characters = signal<Character[]>(loadFromLocalStorage());

  protected saveToLocalStorage = effect( () => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));    
  })

  addCharacter(character: Character) {
    this.characters.update((list) => [
      ...list, character
    ]);
  }
}
