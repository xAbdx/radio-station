import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'radio-Stations';
  cities: any = [];
  city: any;
  http: any;
  
  constructor(private httpClient: HttpClient) {
    console.log(environment.production); // Logs false for default environment

  }

  ngOnInit() {
    this.httpClient.get("assets/cities.json").subscribe(cities => {
      this.cities = cities;
      console.log(cities);
    })
  }

  fetchData() {
    this.cities = this.http.get('/api/cities').map((cities: { json: any; }) => cities.json)
  }
}
