import {IAvailableTarget} from '../../Interfaces/AvailableTarget';
import {IDefends} from '../../Interfaces/Defends';
import {IMakeMove} from '../../Interfaces/makeMove';
import {Unit} from '../Unit';

export abstract class DamageDealers extends Unit {
  private _damage: number;
  private _action: IMakeMove;

  constructor(
    _id: string,
    _name: string,
    _HP: number,
    _maxHP: number,
    _initiative: number,
    _isParalyzes: boolean,
    _damage: number,
    _action: IMakeMove,
    _defense: IDefends,
    _availableTarget: IAvailableTarget,
  ) {
    super(
      _id,
      _name,
      _HP,
      _maxHP,
      _initiative,
      _isParalyzes,
      _defense,
      _availableTarget,
    );
    this._damage = _damage;
    this._action = _action;
  }

  get damage(): number {
    return this._damage;
  }
  set damage(value: number) {
    this._damage = value;
  }

  attack(Units: Unit[], currentUnit: string, targetId?: string) {
    const enemy = this.target.getTarget(Units, currentUnit, targetId);

    this._action.makeMove(enemy, this._damage);

    return enemy;
  }
}
