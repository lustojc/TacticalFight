import { DamageDealers } from "./DamageDealers";

export class Centaur extends DamageDealers{
    constructor() {
        super(
            'Centaur',
            150,
            150,
            50,
            false,
            50,
        )
    }
}