import {Unit} from '../unitsClasses/Unit';

export interface IMakeMove {
  makeMove(aim: Unit[], value?: number): Unit[];
}
