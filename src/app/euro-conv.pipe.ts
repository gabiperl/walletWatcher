import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroConv'
})
export class EuroConvPipe implements PipeTransform {

  transform(value: number): number {
    let number = value * {{coin.price_usd}}
    return number;
  }

}
