export interface IWeatherResponse {
  location: LocationWeather;
  current: CurrentWeather;
  forecast: Forecastday[]
};

export type ConditionWeather = {
  text: string,
  icon: string,
  code: number,
}

export type LocationWeather = {
  name: string;
  region: string;
  country: string;
  lat: number,
  lon: number,
  tz_id: string,
  localtime_epoch: number,
  localtime: string,
};

export type CurrentWeather = {
  condition: ConditionWeather,
  [key: string]: string | number | ConditionWeather,
}

export type Forecastday = {
  day: Record<string, string | number | ConditionWeather>
  astro: Record<string, string>
  hour: Record<string, string | number | ConditionWeather>
}