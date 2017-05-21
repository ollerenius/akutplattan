/**
 * Created by daniel on 4/27/17.
 */
import {Injectable} from "@angular/core";

/**
 * Service used to transfer medicine dosage information from barnhlrsettings to the hlr flow.
 */
@Injectable()
export class HLRDosageService {
  /**
   * Standard doses and compressions for an adult.
   */
  private readonly adultAdrenaline : number = 1;
  private readonly adultAmiodarone : number = 300;
  private readonly adultCompressions : string = "30:2";
  /**
   * Standard compressions for a child.
   */
  private readonly childCompressions : string = "15:2";


  /**
   * Initial values assigned to dosage and compressions, being dosages for an dult.
   */
  adrenaline : number = this.adultAdrenaline;
  amiodarone : number = this.adultAmiodarone;
  compressions : string = this.adultCompressions;

  /**
   * Sets the dosage and compression values to that of a child with the given weight.
   * @param weightKg : number The weight of the child in kilograms.
   */
  public setChildCPRValues(weightKg : number) : void{
    this.setDosagesFromWeight(weightKg);
    this.compressions = this.childCompressions;
  }

  /**
   * Sets the dosage and compression values to that of an adult. These values are fixed.
   */
  public setAdultCPRValues() : void{
    this.setAdultDosage();
    this.compressions = this.adultCompressions;
  }

  /**
   * Sets the medicine dosage to the default values for an adult.
   */
  private setAdultDosage() : void{
    this.adrenaline = this.adultAdrenaline;
    this.amiodarone = this.adultAmiodarone;
  }

  /**
   * Sets the doses for a person based on the persons weight. This is primarily used for child CPR.
   * @param weightKg : number The persons weight in kg
   */
  private setDosagesFromWeight(weightKg : number) : void {
    if (weightKg < 50) {
      this.adrenaline = Math.round(weightKg * 0.01*100)/100;
      this.amiodarone = Math.round(weightKg * 5); //TODO: Double-check these dosage values for corresponding weights
      /*
       From table:
       Adrenaline (0.1 mg/ml) 0.01 mg/kg, 0.1 ml/kg
       Amiodarone 15mg/ml* 5 mg/kg, 0.33 ml/kg

       *Amiodarone 50mg/ml. 6 ml spädes med 14 ml glukos 50mg/ml = 15 mg/ml
       */
    }
    else{
      this.setAdultDosage();
    }
  }
}
