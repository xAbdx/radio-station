import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-raidos',
  templateUrl: './raidos.component.html',
  styleUrls: ['./raidos.component.css']
})
export class RaidosComponent implements OnInit {
  cities: any;
  httpClient: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.httpClient.get("assets/cities.json").subscribe((cities: any) => {
      this.cities = cities;
      console.log(cities);
    })
  }

}
