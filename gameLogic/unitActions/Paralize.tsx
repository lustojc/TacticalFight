import {Unit} from '../unitsClasses/Unit';
import {IMakeMove} from '../Interfaces/makeMove';

export class Paralize implements IMakeMove {
  makeMove(enemyUnit: Unit[]): Unit[] {
    enemyUnit.forEach(enemy => {
      enemy.isParalized = true;
    });
    return enemyUnit;
  }
}
