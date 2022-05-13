import {Unit} from '../../unitsClasses/Unit';

export const getSingleTarget = (
  availableTargets: Unit[],
  targetId: string | undefined,
) => {
  const target = availableTargets.filter(unit => unit.id === targetId);

  return target;
};
