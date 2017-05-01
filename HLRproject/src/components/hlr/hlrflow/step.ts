export class Step {

  // TODO: Make variables private, introduce getters
  /**
   * The index of the currently active step.
   * When a change is registered by the parent component, this value
   * will be changed to reflect that.
   * @type {number}
   */
  public currentStepIndex : number = 0;
  public index : number;
  private static ASSIGN_INDEX : number = 0;
  public showAdrenalineDose : boolean = false;
  public showAmiodaroneDose : boolean = false;

  constructor(public amiodaroneDose: number,
              public adrenalineDose : number,
              public defibrilate : boolean,
              public radioModel : string,
              public heartMassage : string){

    this.index = Step.ASSIGN_INDEX++;


    // Should this step show the adrenaline-button?
    if ((this.index == 2) || (this.index == 4)) {
      this.showAdrenalineDose = true;
    }

    // Should this step show the amiodaron-button?
    if(((this.index % 2) == 0) && (this.index != 0)) {
      this.showAmiodaroneDose = true;
    }
  }
}
