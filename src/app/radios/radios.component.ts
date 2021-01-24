import { Component, Input, OnInit } from '@angular/core';
import { HttpReqService } from '../http-req.service';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent implements OnInit {

  constructor(private HttpReqService: HttpReqService) { }
  cities: any;

  ngOnInit(): void {
    this.cities = this.HttpReqService.cities;
  }
  @Input() radios: any;
}
