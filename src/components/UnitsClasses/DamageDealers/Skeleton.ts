import { DamageDealers } from "./DamageDealers";

export class Skeleton extends DamageDealers{
    constructor() {
        super(
            'Skeleton',
            100,
            100,
            50,
            false,
            25
        )
    }
}