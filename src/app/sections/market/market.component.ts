import { Component } from '@angular/core';
import { CoinCardComponent } from "./coin-card/coin-card.component";
import { MarketDataService } from '../../market-data.service';

@Component({
  selector: 'app-market',
  imports: [CoinCardComponent],
  templateUrl: './market.component.html',
  styles: ``
})
export class MarketComponent {

 private coins:any[] = []

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

  getCoins()
  { return this.coins}

}
