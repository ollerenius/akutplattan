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

  constructor(public amiodaroneDose: number,
              public adrenalineDose : number,
              public defibrilate : boolean,
              public radioModel : string){

    this.index = Step.ASSIGN_INDEX++;
  }
}
