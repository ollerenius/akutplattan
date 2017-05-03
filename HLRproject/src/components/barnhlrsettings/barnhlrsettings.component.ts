import {Component} from '@angular/core';
import {BarnHLRService} from '../../services/barnhlr.service';
import {HLRDosageService} from "../../services/hlrdosage.service";

@Component({
  selector: 'barnhlrsettings-page',
  templateUrl: './barnhlrsettings.component.html',
  styleUrls: ['./barnhlrsettings.component.css'],
})


/**
 * The main page of barnhlr. Used to get the necessary medicine dosage for kids, with age or weight as input variables.
 */
export class BarnHLRSettingsComponent{
  title = 'BarnHLR page';
  useAge: boolean;
  wetflag : string = "Ogiltig";
  inputRadioModel : string = "Ar";
  newCalcUnit : string;
  private lastKeypadString : string = "";

  onNotify(keypadString : string) : void{
    //This line is to make certain that the input type does not change after verifying the correct format
    this.lastKeypadString = keypadString; //Used for the purpose of updating the weight displayed when changing input type.
    this.updateDisplayedWetflagValue();
  }

  constructor(private barnHLRService: BarnHLRService, private hlrDosageService : HLRDosageService) {
    this.useAge = barnHLRService.isWeightKnown;

    if (this.useAge == true){
      this.newCalcUnit = "vikt";
    }
    else{
      this.newCalcUnit = "ålder";
    }
  }

  /**
   * Changes what input state we are in, age or weight.
   * @param currentState : boolean The current state
   */
  switchKeypad(currentState : boolean) : void{
    if (currentState == true){
      this.useAge = false;
      this.newCalcUnit = "ålder";
    }
    else{
      this.useAge = true;
      this.newCalcUnit = "vikt";
    }
  }

  /**
   * Updates the displayed wetflag value, based on the last entried keypad string received.
   */
  private updateDisplayedWetflagValue() : void{
    let inputType = this.inputRadioModel;
    if(this.verifyStringFromKeypad(this.lastKeypadString, inputType)) {
      let wetflagNumber: number = this._wetflagTransform(this.lastKeypadString, inputType);
      if (this.useAge == false) {
        this.wetflag = String(this.lastKeypadString + " kg");
      }
      else{
        this.wetflag = String(wetflagNumber + " kg");
      }
      //TODO: Only navigate to HLR after we have a real weight (not on undefined etc..)
      //TODO: Fix it so that this part guarantees safety (eg. that this.wetflag is good number)
      this.hlrDosageService.setDosagesFromWeight(Number(wetflagNumber));
    }
    else{
      this.wetflag = "Ogiltig";
    }
  }

  /**
   * This function verifies that the input holds to the expected input type.
   * @param keypadString : string The input string to verify.
   * @param expectedInputType : string The expected input type.
   * @returns {boolean} True if input holds to the type specification, false if not.
   */
  private verifyStringFromKeypad(keypadString : string, expectedInputType : string) : boolean{
    if (this.useAge == true && expectedInputType=="Personnummer") {
      return (keypadString.length == 8 || keypadString.length == 12) && !isNaN(Number(keypadString));
    }
    return !isNaN(Number(keypadString));
  }

  /**
   * Calculates the age of a (swedish) person number in months and returns it.
   * !!! REQUIRES EXTERNAL SANITY CHECK !!! (see this.verifyStringFromKeypad)
   * Pnumber is YYYYMMDD or YYYYMMDDxxxx so len(pn) == 8 | 12
   * @param pnumber A person number (last 4 digits optional and the last 6 will be ignored)
   * @returns {number} The age of the person, rounded to closest age in months.
   */
  private pnToMonths(pnumber : string) : number{
    //TODO: This does NOT count days, what can be done is dDays - pnDays where 15 is round to 1 and lower 0 (in added months)
    //TODO: Better sanity check (pnYears > dYears is possible right now.. as well as pnMonths > 12)
    //TODO: Change format to YYMMDD / YYMMDDxxxx instead. This requires sanity check in form of rounding to the best full years (eg. not 19xx when xx=07 but not 20xx when xx=99)
    //Get current year, month and day.
    let date : Date = new Date();
    let dYears : number = date.getFullYear();
    let dMonths : number = date.getMonth() + 1; //Otherwise 0 -> 11

    //Still, only the first 6 numbers is interesting.
    let pnYears : number = Number(pnumber.slice(0,4));
    let pnMonths : number = Number(pnumber.slice(4,6));

    return (dYears - pnYears) * 12 + (dMonths - pnMonths);
  }

  /**
   * Takes an age formatted in a chosen way and returns the estimated weight for that age.
   * @param ageStr : string The input string we want to calculate weight for.
   * @param inputType : string The input type string for which the age is formatted in.
   * @returns {number} The estimated weight.
   */
  private _wetflagTransform(ageStr : string, inputType : string) : number{
    let months : number = 0;
    let years : number = 0;

    switch(inputType){
      case "Personnummer":
        months = this.pnToMonths(ageStr);
        years = Math.floor(months/12);
        months -= years * 12;
        break;
      case "Ar":
        months = 0;
        years = Number(ageStr);
        break;
      case "Manader":
        months = Number(ageStr);
        years = Math.floor(months/12);
        months -= years * 12;
        break;
      default:
        console.error("Undefined input radio model picked.")
        //TODO: If we get here we have some real trouble ahead of us. Can we get here?
        break;
    }

    let outputWetflag : number;

    if(years >= 13){
      outputWetflag = 50;
    }
    else if(years >= 6 && years < 13){
      outputWetflag = 3*years + 7;
    }
    else if(years < 6 && years > 0){
      outputWetflag = 2*years + 8;
    }
    else if(years == 0){
      outputWetflag = 0.5 * months + 4;
    }
    return outputWetflag;
  }
}
