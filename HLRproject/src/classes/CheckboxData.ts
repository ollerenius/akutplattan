/**
 * Created by daniel on 4/4/17.
 */

interface ChecklistButtonData{
  name : string;
  value : boolean;
}

export class CheckboxData implements ChecklistButtonData{
  name : string;
  value : boolean;

  constructor(name : string, value : boolean){
    this.name = name;
    this.value = value;
  }
}
