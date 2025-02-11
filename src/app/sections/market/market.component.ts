import { Component } from '@angular/core';
import { CoinCardComponent } from "./coin-card/coin-card.component";
import { MarketDataService } from '../../market-data.service';
import { FilterByStringPipe } from '../../filter-by-string.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-market',
  imports: [CoinCardComponent, FilterByStringPipe, FormsModule],
  templateUrl: './market.component.html',
  styles: ``
})
export class MarketComponent {

 private coins:any[] = []

  pattern:string = ""

 private euroDol:any = {}



constructor(private market:MarketDataService) {
  this.getMarketData()
 }

  //Implementar la función del SERVICIO.
  getMarketData(){
    this.market.getMarketData().subscribe(
      json => {
        let objeto:any = json
        this.coins = objeto.data
      }
    )
  }
  getEurDolData(){
    this.market.getEurDolData().subscribe(
      json => {
        let objeto:any = json
        this.euroDol = objeto.data
      }
    )
  }

  

  getCoins()
  { return this.coins}

  getPattern()
  { return this.pattern}
}
