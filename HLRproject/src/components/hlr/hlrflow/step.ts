export class Step {

  // TODO: Make variables private, introduce getters
  /**
   * currentStepIndex:
   * The index of the currently active step.
   * When a change is registered by the parent component, this value
   * will be changed to reflect that.
   * @type {number}
   */

  /**
   * index:
   * A unique index number for each step.
   * When a new step is generated, it would be assigned with an incremented unique number.
   * @type {number}
   */

  /**
   * ASSIGN_INDEX:
   * The index of how many new steps that has been generated.
   * When a new step is generated, this value will be incremented with 1.
   * @type {number}
   */


  currentStepIndex : number = 0;
  public index : number;
  private static ASSIGN_INDEX : number = 0;

  constructor(public amiodaroneDose: number,
              public adrenalineDose : number,
              public defibrilate : boolean,
              public radioModel : string,
              public heartMassage : string){

    this.index = Step.ASSIGN_INDEX++;
  }
}
