import { DamageDealers } from "./DamageDealers";

export class SkeletonMage extends DamageDealers{
    constructor() {
        super(
            'Skeleton Mage',
            50,
            50,
            40,
            false,
            20,
        )
    }
}