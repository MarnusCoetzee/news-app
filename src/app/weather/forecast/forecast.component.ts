import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecastData$: Observable<{ dateString: string; temp: number }[]> =
    this.forecastService.getForecast();
  constructor(private forecastService: ForecastService) {}

  ngOnInit(): void {}
}
