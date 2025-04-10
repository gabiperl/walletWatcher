import { Component } from '@angular/core';
import { AssetQuantityComponent } from "./asset-quantity/asset-quantity.component";
import { AssetActionsComponent } from "./asset-actions/asset-actions.component";
import { WalletService } from '../../wallet.service';
import { MarketDataService } from '../../market-data.service';
import { CurrencyPipe } from '@angular/common';
import { EuroConvPipe } from '../../euro-conv.pipe';

@Component({
  selector: 'app-wallet',
  imports: [AssetQuantityComponent, AssetActionsComponent, CurrencyPipe, EuroConvPipe],
  templateUrl: './wallet.component.html',
  styles: ``
})
export class WalletComponent {

  constructor(private wallet:WalletService, private market:MarketDataService) { }
  getWalletAssets() {
    return this.wallet.getWalletAssets();
  }

  updateWallet()
  {
    let wallet = this.getWalletAssets()
    wallet.forEach(c => {
      this.market.getCoinData(c.id).subscribe(
        json => {
          let updatedCoin:any = json
          c.price_usd = updatedCoin[0].price_usd
          // console.log(c.price_usd)
        }
      )
    })

  }

  getTotalBalance()
  {
    let total = 0
    this.getWalletAssets().forEach(c => 
      {total += c.price_usd * c.quantity})
    return total
  }
}
