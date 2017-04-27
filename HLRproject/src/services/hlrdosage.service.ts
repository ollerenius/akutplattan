/**
 * Created by daniel on 4/27/17.
 */
import {Injectable} from "@angular/core";

/**
 * Service used to transfer medicine doseage information from barnhlrsettings to the hlr flow.
 */
@Injectable()
export class HLRDosageService {
  /**
   * The current time as a string since when the last HLR-flow was initiated.
   */
  amiodarone : number = 0;
  adrenaline : number = 0;

  public setDosagesFromWeight(weightKg : number) : void{
    //TODO: Make something useful here
    this.amiodarone = weightKg * 12;
    this.adrenaline = weightKg * 8;

  }
}
