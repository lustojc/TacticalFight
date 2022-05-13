import {Unit} from '../unitsClasses/Unit';

export interface IAvailableTarget {
  getAvailabeTarget(Units: Unit[], currentUnit: string): Unit[];
  getTarget(Units: Unit[], currentUnit: string, targetId?: string): Unit[];
}
