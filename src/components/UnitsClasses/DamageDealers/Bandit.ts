import { DamageDealers } from "./DamageDealers";

export class Bandit extends DamageDealers{
    constructor() {
        super(
            'Bandit',
            75,
            75,
            60,
            false,
            30,
        )
    }
}