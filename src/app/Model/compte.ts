import { Client } from "./client";
import { Employe } from "./employe";

export class Compte  {
    codeCompte !: string  ; 
    dateCreation !:string ; 
    solde !: number ; 
    codeClient !: any ; 
    codeEmploye !: Employe;
    typeCompte !: string ;
    taux !: number;
    decouvert !:number ; 
}
