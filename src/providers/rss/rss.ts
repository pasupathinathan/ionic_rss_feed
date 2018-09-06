import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RssProvider {

  constructor(public http: Http) {
    console.log('Hello RssProvider Provider');
  }
 GetRss()
 {
  const RSS_URL: any = 'https://economictimes.indiatimes.com/markets/stocks/rssfeeds/2146842.cms';
   const API: any = 'fct4q8kqskd9xjgnddyv0setpofnj5cnisbtvfl2';
   const count: any = 5;
   const API_URL: any = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Feconomictimes.indiatimes.com%2Fmarkets%2Fstocks%2Frssfeeds%2F2146842.cms&api_key=fct4q8kqskd9xjgnddyv0setpofnj5cnisbtvfl2';
   const response = this.http.post(API_URL,  {'rss_url':RSS_URL, 'api_key': API, 'count': count} ).map(data=> data.json());
 return response;
  }
}
