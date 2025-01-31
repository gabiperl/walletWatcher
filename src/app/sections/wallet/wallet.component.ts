import { Component } from '@angular/core';
import { AssetQuantityComponent } from "./asset-quantity/asset-quantity.component";
import { AssetActionsComponent } from "./asset-actions/asset-actions.component";

@Component({
  selector: 'app-wallet',
  imports: [AssetQuantityComponent, AssetActionsComponent],
  templateUrl: './wallet.component.html',
  styles: ``
})
export class WalletComponent {

}
