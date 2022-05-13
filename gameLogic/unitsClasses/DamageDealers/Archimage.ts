import {v4 as uuidv4} from 'uuid';

import {MassAttack} from '../../unitActionsType/MassAttack';
import {Attack} from '../../unitActions/Attack';
import {EndDefense} from '../../core/defense/EndDefense';
import {DamageDealers} from './DamageDealers';
import {Unit} from '../Unit';

export class Archimage extends DamageDealers {
  constructor() {
    super(
      uuidv4(),
      'Archimage',
      90,
      90,
      40,
      false,
      30,
      new Attack(),
      new EndDefense(),
      new MassAttack(),
    );
  }

  Action(Units: Unit[], currentUnit: string): Unit[] {
    return this.attack(Units, currentUnit);
  }
}
