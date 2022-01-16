import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { asyncRequest } from './actions';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Info } from './components/Info/Info';
import { Footer } from './components/Footer/Footer';
import { Modal } from './components/Modal/Modal';


function App() {



  const dispath = useAppDispatch();
  const defaultCity = useAppSelector((state) => state.currentWeather.defaultCity);


  useEffect(() => {
    dispath(asyncRequest({defaultCity}));
  }, [dispath, defaultCity]);


  return (
    <div className="container">
      <div className="blur">
        <Modal/>
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
