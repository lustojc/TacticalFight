import {Unit} from '../unitsClasses/Unit';
import {IMakeMove} from '../Interfaces/makeMove';

export class Attack implements IMakeMove {
  makeMove(aim: Unit[], damageValue: number): Unit[] {
    aim.forEach(enemy => {
      const dmg = enemy.receiveDamage(damageValue);
      enemy.hp = enemy.hp - dmg > 0 ? enemy.hp - dmg : 0;
    });
    return aim;
  }
}
