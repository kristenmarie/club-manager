import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'miles',
  pure: false
})
export class MilesPipe implements PipeTransform {

  transform(input: User[], desiredMilesRange) {
    let output: User[] = [];
    if(desiredMilesRange === 'under-10') {
      for(let i = 0; i < input.length; i++) {
        if(input[i].miles < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMilesRange === 'over-10') {
      for(let i = 0; i < input.length; i++) {
        if(input[i].miles >= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
