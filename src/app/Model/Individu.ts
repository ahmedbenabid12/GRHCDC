import { Abonnement } from "./abonnement";
import { Societe } from "./Societe";

export class Individu {
 
    constructor(
        public id: number,
        public nom: string,
        public abonnement: Abonnement,
        public societe: Societe
      ) {}
}
