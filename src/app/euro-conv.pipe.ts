import { Pipe, PipeTransform } from '@angular/core';
import { MarketDataService } from './market-data.service';

@Pipe({
  name: 'euroConv'
})
export class EuroConvPipe implements PipeTransform {

  constructor(private market:MarketDataService) { }

  transform(value:number):number {
    return value / this.market.getEuroDolRate()
  }
}
