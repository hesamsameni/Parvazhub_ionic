import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetFlightListProvider } from '../../providers/get-flight-list/get-flight-list';
import { FlightsPage } from "../flights/flights";
import * as moment from 'jalali-moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public origin_name: any;
  public destination_name: any;
  public flights: any;
  public converted_date: any;
  public date: {};
  constructor(public navCtrl: NavController,public Getflightlistprovider:GetFlightListProvider) {
  }

  datePickerConfig = {
    format: "YYYY-MM-DD"
}
  gotoFlightsPage(origin_name,destination_name,selected_date,persianDate) {
    moment.locale('fa');
    var m1 = moment(selected_date,"YYYY-MM-DD");
    m1.format("YYYY-MM-DD");
    m1.isSame(m1.clone());
    moment('1369-02-21', 'YYYY-MM-DD').locale('en').format('YYYY-MM-DD');
    moment.locale('en');
    let converted_date = m1.format("YYYY-MM-DD");
    this.navCtrl.push( FlightsPage, {
      origin_name: origin_name,
      destination_name: destination_name,
      date: converted_date,
      selectedDate: selected_date
    })
  };
}
