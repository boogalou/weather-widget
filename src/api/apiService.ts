import axios, { AxiosResponse } from 'axios';
import { IWeatherResponse } from '../type/ICurrentWeather';

export class ApiService {

  static async getCurrentWeather(city: string | number): Promise<AxiosResponse<Array<IWeatherResponse>>> {
    return await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
      params: {
        q: city,
        days: 7,
        key: `993848d66a8e4a17950154624221201`,
        aqi: 'yes',
        alerts: 'no',
        // key: `89f47e94cb98ddeb545c2a5c608cbd1e`,
      }
    });
  }
}


