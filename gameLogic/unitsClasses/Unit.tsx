import {IAvailableTarget} from '../Interfaces/AvailableTarget';
import {IDefends} from '../Interfaces/Defends';

export abstract class Unit {
  constructor(
    private _id: string,
    private _name: string,
    private _HP: number,
    private _maxHP: number,
    private _initiative: number,
    private _isParalized: boolean,
    private _defense: IDefends,
    private _availableTarget: IAvailableTarget,
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get hp(): number {
    return this._HP;
  }

  set hp(value: number) {
    this._HP = value;
  }

  get maxHP(): number {
    return this._maxHP;
  }

  set maxHP(value: number) {
    this._maxHP = value;
  }

  get initiative(): number {
    return this._initiative;
  }

  get isParalized(): boolean {
    return this._isParalized;
  }

  set isParalized(value: boolean) {
    this._isParalized = value;
  }

  get defense() {
    return this._defense;
  }

  set defense(value: IDefends) {
    this._defense = value;
  }

  get target(): IAvailableTarget {
    return this._availableTarget;
  }

  set target(value: IAvailableTarget) {
    this._availableTarget = value;
  }

  receiveDamage(damage: number) {
    return this._defense.defense(damage);
  }

  abstract Action(
    Units: Unit[],
    currentUnit: string,
    targetId?: string,
  ): Unit[];
}
