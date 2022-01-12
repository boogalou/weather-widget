import './App.css';
import { MainContent } from './components/MainContent/MainContent';
import { Details } from './components/Details/Details';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { asyncRequest } from './actions';




function App() {

  const dispath = useAppDispatch();
  const city = useAppSelector((state) => state.currentWeather.city)




  useEffect(() => {
    dispath(asyncRequest({city}))
  }, [dispath])


  return (
    <div className="App">
      <div className="widget">

        <MainContent/>
        <Details/>

      </div>
    </div>
  );
}

export default App;
