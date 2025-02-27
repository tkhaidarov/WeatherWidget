export interface IWeatherMain {
  city: string;
  temperature: string;
  time: string;
  icon: string;
}

export interface IWeatherDetails {
  temperature: number;
  feelsLike: number;
  pressure: number;
  precipitation: number;
  windSpeed: number;
  windDirection: string;
  visabilty: number;
  humadity: number;
  uv: number;
  report: string;
}

export interface IWeatherForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    mintemp_c: number;
    condition: {
      icon: string;
      text: string;
    };
    totalprecip_mm: number;
  };
}
