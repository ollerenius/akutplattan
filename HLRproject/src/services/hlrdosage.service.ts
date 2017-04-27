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
   * The current time as a string since when the last HLR-flow was initiated.
   */
  amiodarone : number = 20;
  adrenaline : number = 10;

  public setDosagesFromWeight(weightKg : number) : void{
    //TODO: Make something useful here
    this.adrenaline = weightKg * 0.1;
    this.amiodarone = weightKg * 0.33;


    /*
     From table:
     Adrenaline (0.1 mg/ml) 0.01 mg/kg, 0.1 ml/kg
     Amiodarone 15mg/ml* 5 mg/kg, 0.33 ml/kg

     *Amiodarone 50mg/ml. 6 ml spädes med 14 ml glukos 50mg/ml = 15 mg/ml

     */
  }
}
