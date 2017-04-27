/**
 * Created by daniel on 4/4/17.
 */

/**
 * Defines what variables a CheckboxData object must contain.
 */
interface CheckboxDataInterface{
  name : string;
  value : boolean;
}

/**
 * Defines the data that a checkbox contains. This is used to represent a checkbox outside of HTML (for use in TypeScript code).
 */
export class CheckboxData implements CheckboxDataInterface{
  name : string;
  value : boolean;

  /**
   *
   * @param name The name of the checkbox object.
   * @param value The state that the checkbox currently is in (false/true)
   */
  constructor(name : string, value : boolean){
    this.name = name;
    this.value = value;
  }
}
