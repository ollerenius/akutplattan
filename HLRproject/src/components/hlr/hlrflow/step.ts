export class Step {

  /**
   * currentStepIndex:
   * The index of the currently active step.
   * When a change is registered by the parent component, this value
   * will be changed to reflect that.
   * @type {number}
   */
  currentStepIndex: number = 0;

  /**
   * index:
   * A unique index number for each step.
   * When a new step is generated, it would be assigned with an incremented unique number.
   * @type {number}
   */
  public index: number;

  /**
   * ASSIGN_INDEX:
   * The index of how many new steps that have been generated.
   * When a new step is generated, this value will be incremented with 1.
   * The variable is reset to 0 by calling resetAssignIndex().
   * @type {number}
   */
  private static ASSIGN_INDEX: number = 0;
  public showAdrenalineDose: boolean = false;
  public showAmiodaroneDose: boolean = false;
  public showBoltPicture: boolean = true;

  constructor(public amiodaroneDose: number,
              public adrenalineDose: number,
              public defibrilate: boolean,
              public radioModel: string,
              public heartMassage: string) {

    this.index = Step.ASSIGN_INDEX++;

    if (this.index == 4) {
      if (this.amiodaroneDose == 300) {
        this.amiodaroneDose = amiodaroneDose / 2;
      }
    }


      // Should this step show the adrenaline-button?
      if ((this.index == 2) || (this.index == 4)) {
        this.showAmiodaroneDose = true;
      }

      // Should this step show the amiodaron-button?
      if (((this.index % 2) == 0) && (this.index != 0)) {
        this.showAdrenalineDose = true;
      }
    }

  /**
   * When finishing a flow, call this function to reset the assign
   * index variable, making the next flow start at index 0.
   */
  public static resetAssignIndex() : void {
        Step.ASSIGN_INDEX = 0;
    }
}
