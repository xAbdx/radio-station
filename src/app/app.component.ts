import { Component } from '@angular/core';
import { HttpReqService } from './http-req.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radio-Station';
  constructor(private HttpReqService: HttpReqService) {}
  cities: any;
  cityObject: any;
  city: any;

  ngOnInit(): void {
    this.HttpReqService.getCities().subscribe((data) => {
      this.cityObject = data;
      this.cities = this.cityObject;
    });
  }

  radiosCity(event: any) {
    for (let i = 0; i < this.cities.length; i++) {
      if (event.target.value == this.cities[i].cityName) {
        this.city = this.cities[i];
      }
    }
  }
}
