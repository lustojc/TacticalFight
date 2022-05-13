import {v4 as uuidv4} from 'uuid';

import {MeleeAttack} from '../../unitActionsType/MeleeAttack';
import {EndDefense} from '../../core/defense/EndDefense';
import {Attack} from '../../unitActions/Attack';
import {DamageDealers} from './DamageDealers';
import {Unit} from '../Unit';

export class Centaur extends DamageDealers {
  constructor() {
    super(
      uuidv4(),
      'Centaur',
      150,
      150,
      50,
      false,
      50,
      new Attack(),
      new EndDefense(),
      new MeleeAttack(),
    );
  }

  Action(Units: Unit[], currentUnit: string, targetId?: string): Unit[] {
    return this.attack(Units, currentUnit, targetId);
  }
}
