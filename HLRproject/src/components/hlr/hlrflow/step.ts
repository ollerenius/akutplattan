export class Step {
  // TODO: Make variables private, introduce getters
  constructor(public amiodaroneDose: number,
              public adrenalineDose : number,
              public deffibrilate : boolean,
              public vfVt : boolean,
              public radioModel : string,
              public index : number){

  }
}
