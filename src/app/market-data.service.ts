import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  private urlBase= "https://api.coinlore.net/api/"

  private dolEurRate = 1
  constructor(private http:HttpClient) { 
    this.http.get(this.urlBase+"ticker/?id=111393").subscribe(
      json => {
        let coin:any = json
        this.dolEurRate = coin[0].price_usd
      }
    )
    
  }

getMarketData(){
  return this.http.get(this.urlBase+"tickers/?limit=20");
}
getEurDolData(){
  return this.http.get(this.urlBase+"ticker/?id=111393");
}

getCoinData(id:number){
  return this.http.get(this.urlBase+"ticker/?id="+id)}

getEuroDolRate()
{return this.dolEurRate}

}
