
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {LoadingController } from 'ionic-angular/index';

@Injectable()
export class GetFlightListProvider {
  http: any;
  getFlightsURL: String;
  getSellersURL: String;
  public data: any;
  public flightInfo: any;

  constructor(http: Http, public loadingController:LoadingController) {
    this.http = http;
    this.getFlightsURL = "https://parvazhub.com/api/v1/flights/?";
    this.getSellersURL = "https://parvazhub.com/api/v1/suppliers/?id=";
  }


  getFlightsAPI(origin_name,destination_name,date){
    let loading = this.loadingController.create({
      content: 'در حال جستجو'
    });
    loading.present();  
    return new Promise(resolve => {
      this.http.get(this.getFlightsURL+"origin_name="+origin_name+"&destination_name="+destination_name+"&date="+date+"&channel=ionic")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          loading.dismiss();
        });
    }); 
  }


  getSellers(id){
    let loading = this.loadingController.create({
      content: 'در حال جستجو'
    });
    loading.present();  
    return new Promise(resolve => {
      this.http.get(this.getSellersURL+id+"&channel=ionic")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.body;
          resolve(this.data);
          loading.dismiss();
        });
    });
  }

}
