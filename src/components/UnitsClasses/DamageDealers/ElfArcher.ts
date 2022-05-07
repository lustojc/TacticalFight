import { DamageDealers } from "./DamageDealers";

export class ElfArcher extends DamageDealers{
    constructor() {
        super(
            'Elf Archer',
            90,
            90,
            60,
            false,
            45,
        )
    }
}