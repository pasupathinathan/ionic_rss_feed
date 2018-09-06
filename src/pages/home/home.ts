import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rssDataArray: any= [];

  constructor(public navCtrl: NavController, public rssProvider:RssProvider) {

  }
ionViewDidLoad()
{
  console.log('ionViewDidLoad HomePage');
  this.Get_Rss_Data();
}


  Get_Rss_Data()
  {
    this.rssProvider.GetRss().subscribe(
          data=>{
            this.rssDataArray = data;
            console.log(data);
          }
        );
  }
}
