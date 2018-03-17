import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetFlightListProvider } from '../../providers/get-flight-list/get-flight-list';

@IonicPage()
@Component({
  selector: 'page-sellers',
  templateUrl: 'sellers.html',
})
export class SellersPage {
  public sellers: any;
  public id: any;
  public destinationFetch: any;
  public originFetch: any;
  public dateFetch: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public Getflightlistprovider:GetFlightListProvider) {
    this.id = navParams.get("id")
    this.originFetch = navParams.get("origin_name")
    this.destinationFetch = navParams.get("destination_name")
    this.dateFetch = navParams.get("date")
  }
  
  ngOnInit(){
    this.getSellerslist(this.id);
  }

  getSellerslist(id){
    this.Getflightlistprovider.getSellers(id)
    .then(data => {
      this.sellers = data;
    });
    }

    redirect(id,flight_id,originFetch,destinationFetch,dateFetch){
      window.open("https://parvazhub.com/redirect/"+originFetch+"-"+destinationFetch+"/"+dateFetch+"/"+flight_id+"/"+id+"/ionic");
    }
}

