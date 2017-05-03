/**
 * Defines what variable the HLRStepAttribute must contain.
 *
 */
interface HLRStepAttributesInterface{
  stepDirection : string;
  currentAnalysisState: string;
}


/**
 * Each instance of an HLRStepAttribute corresponds a step event.
 * Each object contains information about what type of analysis we are doing in the current step,
 * as well as what direction we are going.
 *
 */
export class HLRStepAttributes implements HLRStepAttributesInterface{
  stepDirection : string;
  currentAnalysisState: string;

  /**
   * The constructor for HLRStepAttribute
   * @param stepDirection : string What direction we are stepping in, 'next' or 'prev'
   * @param currentAnalysisState : string What analysis type we are currently in, 'VT/VT' or 'Asy'
   */
  constructor(stepDirection: string, currentAnalysisState: string) {
    this.stepDirection = stepDirection;
    this.currentAnalysisState = currentAnalysisState;
  }
}
