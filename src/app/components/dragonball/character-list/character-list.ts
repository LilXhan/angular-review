import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html'
})
export class CharacterList {
  public characters = input.required<Character[]>();
  public listName = input.required<string>();
}
