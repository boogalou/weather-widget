import axios, { AxiosResponse } from 'axios';
import { ICurrentWeather } from '../type/ICurrentWeather';

export class ApiService {

  static async getCurrentWeather(city: string | number): Promise<AxiosResponse<Array<ICurrentWeather>>> {
    console.log('ApiService:', city);
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        units: 'metric',
        lang: 'en',
        appid: `89f47e94cb98ddeb545c2a5c608cbd1e`,
      }
    });

  }
}


