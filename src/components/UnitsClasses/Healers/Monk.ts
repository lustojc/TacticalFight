import { Healers } from "./Healers";

export class Monk extends Healers{
    constructor() {
        super(
            'Monk',
            90,
            90,
            20,
            false,
            40
        )
    }
}