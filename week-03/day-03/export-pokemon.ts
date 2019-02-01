export class Pokemon {
    name: string;
    type: string;
    effectiveAgainst: string;

    constructor(pName: string, pType: string, pEffectiveAgainst: string) {
        this.name = pName;
        this.type = pType;
        this.effectiveAgainst = pEffectiveAgainst;
    }

    isEffectiveAgainst(pokemon: Pokemon): boolean {
        return this.effectiveAgainst === pokemon.type;
    }
}