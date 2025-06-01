import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [CharacterList, CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super'
})
export class DragonballSuperPage {
  public dragonballService = inject(DragonballService);
}
