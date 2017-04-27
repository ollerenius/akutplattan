import {Injectable} from "@angular/core";
/**
 * Created by daniel on 4/4/17.
 */


/**
 * Service used to share the time that has passed since a HLR-flow was initiated to other components.
 */
@Injectable()
export class TimerService {
  /**
   * The current time as a string since when the last HLR-flow was initiated.
   */
  currentTimeString : string;
}
