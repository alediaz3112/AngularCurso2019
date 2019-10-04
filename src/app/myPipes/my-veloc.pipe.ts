import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myVeloc'
})
export class MyVelocPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + " km/h";
  }

}
