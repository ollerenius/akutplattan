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
   * Standard dose for an adult
   */
  adrenaline : number = 1;
  amiodarone : number = 300;


  /**
   * Sets the doses for a person based on the persons weight
   * @param weightKg :number - the persons weight in kg
   */
  public setDosagesFromWeight(weightKg : number) : void {
    if (weightKg < 50) {
      this.adrenaline = (weightKg * 0.01 *100/100);//This equation is written this way because of decimals in the answer.
      this.amiodarone = Math.round(weightKg * 5); //TODO: Double-check these dosage values for corresponding weights
      /*
       From table:
       Adrenaline (0.1 mg/ml) 0.01 mg/kg, 0.1 ml/kg
       Amiodarone 15mg/ml* 5 mg/kg, 0.33 ml/kg

       *Amiodarone 50mg/ml. 6 ml spädes med 14 ml glukos 50mg/ml = 15 mg/ml
       */
    }
    else{
      this.adrenaline = 1;
      this.amiodarone = 300;
    }
  }
}
