import Home from './pages/home';
import useFetch from "./useFetch";
import Header from './components/header';
import CountryDetails from './pages/countryDetails';
import { useState } from 'react';
import { HashRouteR as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [ theme, setTheme ] = useState('light');
  const { data, isLoading, errorMessage } = useFetch('https://restcountries.com/v3.1/all/');
  const changeTheme = (currentTheme) => {
    if (currentTheme === 'dark') {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
      setTheme('light')
    } else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
      setTheme('dark')
    }
  };

  return (
    <Router>
      <Header theme={theme} changeTheme={changeTheme} />
      <Routes>
        <Route path='/' element={<Home countries={data} isLoading={isLoading} errorMessage={errorMessage} />} />
        <Route path='/countries/:countryId' element={<CountryDetails countries={data} />} />
      </Routes>
    </Router>
  );
}

export default App;