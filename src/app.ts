// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {id: 0, name: "Bélabá", sex: "male", age: 80, health: 1},
    {id: 1, name: "Titus", sex: "male", age: 35, health: 5 },
    {id: 2, name: "Hilda", sex: "female", age: 40, health: 4 }
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {id: 0, name: "Valér", wings: 0, wheels: 0, clan: "kufli"},
    {id: 1, name: "Zödön", wings: 0, wheels: 0, clan: "kufli"},
    {id: 2, name: "Pofánka", wings: 0, wheels: 0, clan: "kufli"}
];
