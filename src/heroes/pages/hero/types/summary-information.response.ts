import { Hero } from "./hero.interface";

export interface SummaryInFormationResponse {
    totalHeroes: number;
    strongestHero: Hero;
    smartestHero: Hero;
    heroCount: number;
    villainCount: number;
}


