import { Component } from '@angular/core';

import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Steven\'s Giphy Search';
  query = 'http://api.giphy.com/v1/gifs/search?api_key=W9694uE7E0PQ91pv5jUgxXsn7GnJ3sSR&limit=20&q='; 
  http: Http;
  gifs = [];

  constructor(http: Http) {
    this.http = http;
  }

  onKey(event: any) {
    if (event.keyCode === 13) {
      this.searchForGifs(event.target);
    }
  }

  // Search for Gifs using Giphy API given the input
  searchForGifs(search: HTMLInputElement) : void {
    var apiLink = this.query + search.value; 
    this.http.request(apiLink) 
      .subscribe((res: Response) => { 
        this.gifs = res.json().data;
      }); 
  }
}
