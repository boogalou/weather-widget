export interface ICurrentWeather {
  name: string;
  main: Main;
  weather: Wather[];
}

type Main = Record<string, number>

type Wather = {
  description: string;
  icon: string;
  id: number;
  main: string;
}