import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetFlightListProvider } from '../../providers/get-flight-list/get-flight-list';
import { SellersPage } from "../sellers/sellers";

@IonicPage()
@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {
  public origin_name: any;
  public destination_name: any;
  public date: any;
  public flights: any;
  public id : any;
  public origin: any;
  public destination: any;
  public loading: any;
  public persianDate: any;
  public destination_persian_name: any;
  public origin_persian_name: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public Getflightlistprovider:GetFlightListProvider) {
    this.origin_name = navParams.get("origin_name")
    this.destination_name = navParams.get("destination_name")
    this.date = navParams.get("date")
    this.persianDate = navParams.get("selectedDate")
    
  }

  ngOnInit(){
    this.getFlights(this.origin_name,this.destination_name,this.date);
  }

getFlights(origin_name,destination_name,date){
this.Getflightlistprovider.getFlightsAPI(origin_name,destination_name,date)
.then(data => {
  this.flights = data;
 
  });
}

goToSellersPage(id,origin_name,destination_name,date) {
  this.navCtrl.push(SellersPage, {
    id: id,
    origin_name: origin_name,
    destination_name: destination_name,
    date: date
  })
};
}