import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { asyncRequest } from './actions';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Info } from './components/Info/Info';
import { Footer } from './components/Footer/Footer';


function App() {

  const dispath = useAppDispatch();
  const city = useAppSelector((state) => state.currentWeather.city);


  useEffect(() => {
    dispath(asyncRequest({city}));
  }, [dispath]);


  return (
    <div className="container">
      <div className="blur">
        <div className="widget">

          <Header/>
          <Main/>
          <Info/>
          <Footer/>

        </div>
      </div>
    </div>
  );
}

export default App;
