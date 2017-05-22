/**
 * Created by daniel on 4/27/17.
 */
import {Injectable} from "@angular/core";
import {stringDistance} from "codelyzer/util/utils";

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

  // Set to 0 for adults to simplify the control of the visibility property.
  joule : number = 0;

  /**
   * Sets the doses for a person based on the persons weight
   * @param weightKg :number - the persons weight in kg
   */
  public setDosagesFromWeight(weightKg : number) : void {
    /*
     From table:
     Adrenaline = (0.1 mg/ml) 0.01 mg/kg, 0.1 ml/kg
     Amiodarone = 15 mg/ml* 5 mg/kg, 0.33 ml/kg
     Joule = 4 J/kg

     Amiodarone 50mg/ml. 6 ml diluted with 14 ml glucose 50mg/ml = 15 mg/ml
     */
    if (weightKg < 50) {
      this.adrenaline = Math.round(weightKg * 0.01*100)/100;
      this.amiodarone = Math.round(weightKg * 5); //TODO: Double-check these dosage values for corresponding weights
    }
    else {
      this.setDefaultAdultDosage();
    }
    // Even big children hearts take damage if defibrillated with higher then 150 joule
    if (4 * weightKg > 150) {
      this.joule = 150;
    } else {
      this.joule = 4 * weightKg;
    }
  }

  /**
   * Sets the medicine dosage to the default values for an adult.
   */
  setDefaultAdultDosage() : void {
    this.adrenaline = 1;
    this.amiodarone = 300;
    this.joule = 0;
  }
}
