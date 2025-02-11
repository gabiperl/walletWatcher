import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByString'
})
export class FilterByStringPipe implements PipeTransform {

  //Value: lo que entra. En este caso, "coins:any[]".
  transform(coins: any[], pattern:string): any[] {
    return coins.filter(c => c.name.toLowerCase().includes(pattern.toLowerCase()) 
                      || c.symbol.toLowerCase().includes(pattern.toLowerCase()));
  }

}
