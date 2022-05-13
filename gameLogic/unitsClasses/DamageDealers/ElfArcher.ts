import {v4 as uuidv4} from 'uuid';

import {RangeAttack} from '../../unitActionsType/RangeAttack';
import {EndDefense} from '../../core/defense/EndDefense';
import {Attack} from '../../unitActions/Attack';
import {DamageDealers} from './DamageDealers';
import {Unit} from '../Unit';

export class ElfArcher extends DamageDealers {
  constructor() {
    super(
      uuidv4(),
      'Elf Archer',
      90,
      90,
      60,
      false,
      45,
      new Attack(),
      new EndDefense(),
      new RangeAttack(),
    );
  }

  Action(Units: Unit[], currentUnit: string, targetId?: string): Unit[] {
    return this.attack(Units, currentUnit, targetId);
  }
}
