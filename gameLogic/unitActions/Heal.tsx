import {Unit} from '../unitsClasses/Unit';
import {IMakeMove} from '../Interfaces/makeMove';

export class Heal implements IMakeMove {
  makeMove(allies: Unit[], heal: number): Unit[] {
    allies.forEach(ally => {
      ally.hp = ally.hp + heal > ally.maxHP ? ally.maxHP : ally.hp + heal;
    });
    return allies;
  }
}
