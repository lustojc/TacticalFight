import {IAvailableTarget} from '../../Interfaces/AvailableTarget';
import {IDefends} from '../../Interfaces/Defends';
import {IMakeMove} from '../../Interfaces/makeMove';
import {Unit} from '../Unit';

export abstract class Healers extends Unit {
  private _heal: number;
  private _action: IMakeMove;

  constructor(
    _id: string,
    _name: string,
    _HP: number,
    _maxHP: number,
    _initiative: number,
    _isParalyzes: boolean,
    _heal: number,
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
    this._heal = _heal;
    this._action = _action;
  }

  get heal(): number {
    return this._heal;
  }
  set heal(value: number) {
    this._heal = value;
  }

  get action(): IMakeMove {
    return this._action;
  }

  set action(value: IMakeMove) {
    this._action = value;
  }

  healTeammates(Units: Unit[], currentUnit: string, targetId?: string) {
    const mates = this.target.getTarget(Units, currentUnit, targetId);
    this._action.makeMove(mates, this._heal);
    return mates;
  }
}
