import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent{

  city:string;
  temperature:number;
  humidity:number;
  pressure:number;
  weather:string;
  response:any;

  constructor(private http: HttpClient) { }

  getWeather($event, cityName){
    
    $event.preventDefault();
    if(!cityName.value) {
      alert('Please enter city name');
    }

    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=fec8b249edbf6232ae4e5957bd8e7ecf&units=metric`).subscribe(res=>{
      console.log(res);
      this.response = res;
    })
  }
}

